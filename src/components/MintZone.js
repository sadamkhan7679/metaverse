import React, { useState } from "react";

import { w3 } from "@/src/utils/w3";
import { ButtonBase } from "./Button";

let maxSupply;
let price;

if (typeof window !== "undefined") {
  maxSupply = window.maxSupply ? window.maxSupply : 10000;
  price = window.tokenPrice ? String(window.tokenPrice) : "0.0001";
}

export function MintZone({
  isPaused,
  totalSupply,
  isPresale,
  contract,
  setTotalSupply,
  tokenPrice,
  setErrorMessage,
  setOpenErrorMessage,
}) {
  const [inputError, setInputError] = useState(false);
  const [amount, setAmount] = useState(1);
  const [mintMore, setMintMore] = useState(false);

  return (
    <div className="mint-zone">
      <input
        className="mint-input"
        value={amount}
        size="3"
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        min="1"
        max={maxSupply - totalSupply}
      />
      <ButtonBase disabled={!contract || isPaused} onClick={mint}>
        {mintMore ? "MINT MORE" : "MINT"}
      </ButtonBase>
    </div>
  );

  async function mint() {
    if (amount <= 0 || amount + totalSupply > maxSupply) {
      setInputError(true);
      setErrorMessage("Invalid Amount");
      setOpenErrorMessage(true);
      return;
    }

    if (!w3.isCorrectEthereumNetwork()) {
      await w3.connectToEthereum();
      return;
    }

    try {
      const tx = isPresale ? await presaleMint() : await publicMint();
      setAmount(1);
      setMintMore(true);
      await tx.wait();
      const mintedAmount = await contract.totalSupply();
      setTotalSupply(mintedAmount.toNumber());
    } catch (error) {
      setErrorMessage(
        `Error: ${error.message.replace("execution reverted:", " ")}`
      );
      setOpenErrorMessage(true);
    }
  }

  async function presaleMint() {
    return await contract.presaleMint(amount, {
      value: tokenPrice.mul(amount),
    });
  }

  async function publicMint() {
    return await contract.publicMint(amount, {
      value: tokenPrice.mul(amount),
    });
  }
}
