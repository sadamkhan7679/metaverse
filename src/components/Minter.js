import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { DataStore } from "@aws-amplify/datastore";
import Amplify from "@aws-amplify/core";

import { WalletStatus } from "./WalletStatus";
import { MintZone } from "./MintZone";
import { WalletBalance } from "@/src/utils/models";
import { contractABI } from "@/src/contract/abi";
import { contractAddress } from "@/src/contract/address";

import { ButtonBase } from "./Button";

import { w3 } from "@/src/utils/w3";

Amplify.configure({});

export function Minter({
  account,
  setAccount,
  setConnected,
  setContract,
  connected,
  isPaused,
  totalSupply,
  isPresale,
  contract,
  setTotalSupply,
  tokenPrice,
  setTokenPrice,
  setBaseURI,
  setOwner,
  setIsPaused,
  setIsPresale,
  setIsAdmin,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [openErrorMessage, setOpenErrorMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      setTimeout(() => {
        setIsConnected(w3.isConnected()); // wait a little bit to check if metamask is connected because it takes a bit to load
      }, 300);
    }
  }, []);

  let mintErrorDialog;
  if (typeof document !== "undefined") {
    mintErrorDialog = document.querySelector(".mint-error");
  }

  useEffect(() => {
    if (openErrorMessage) {
      mintErrorDialog.showModal();
      document.addEventListener("keyup", escapeHandler);
      document.addEventListener("click", outsideClickHandler);
    }
  }, [openErrorMessage]);

  w3.onAccountChanged = async (account) => {
    setIsConnected(account !== null);
    if (account) setAccount(account);

    const provider = await w3.getProvider();
    const balance = Number(
      ethers.utils.formatEther(await provider.getBalance(account))
    );

    if (balance == 0) return;

    let wallets = await DataStore.query(WalletBalance, (c) =>
      c.wallet("eq", account).balance("eq", balance)
    );

    if (wallets && wallets.length > 0) return;

    await DataStore.save(
      new WalletBalance({
        wallet: account,
        balance: balance,
        createdAt: new Date().toISOString(),
      })
    );
  };

  w3.onDisconnect = () => {
    setIsAdmin(false);
    setAccount("");
    setConnected(false);
    setContract(null);
  };

  return (
    <>
      <WalletStatus
        connected={connected}
        account={account}
        setContract={setContract}
        setConnected={setConnected}
        setAccount={setAccount}
      />
      {connected && (
        <MintZone
          isPaused={isPaused}
          totalSupply={totalSupply}
          isPresale={isPresale}
          contract={contract}
          setTotalSupply={setTotalSupply}
          tokenPrice={tokenPrice}
          setErrorMessage={setErrorMessage}
          setOpenErrorMessage={setOpenErrorMessage}
        />
      )}
      <dialog className="mint-error">
        <div className="click-capturer">
          <ButtonBase onClick={closeError}>X</ButtonBase>
          {errorMessage}
        </div>
      </dialog>
    </>
  );

  function closeError() {
    mintErrorDialog.close();
    document.removeEventListener("keyup", escapeHandler);
    document.removeEventListener("click", outsideClickHandler);
    setOpenErrorMessage(false);
  }

  function escapeHandler(e) {
    if (e.code === "Escape") closeError();
  }

  function outsideClickHandler(e) {
    if (e.target.className === "mint-error") closeError();
  }

  function setIsConnected(isConnected) {
    setConnected(isConnected);
    if (isConnected) {
      (async () => {
        const provider = await w3.getProvider();
        const signer = await provider.getSigner();
        const _contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const mintedAmount = await _contract.totalSupply();
        const presale = await _contract.presale();
        const paused = await _contract.paused();
        const price = await _contract.tokenPrice();
        const baseURI = await _contract.baseURI();
        const owner = await _contract.owner();
        setTokenPrice(ethers.utils.formatEther(price));
        setBaseURI(baseURI);
        setOwner(owner);
        setIsPaused(paused);
        setIsPresale(presale);
        setTotalSupply(mintedAmount.toNumber());
        setContract(_contract);
      })();
    } else {
      setContract(null);
    }
  }
}
