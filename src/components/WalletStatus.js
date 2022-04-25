import React from "react";
import { ButtonBase } from "./Button";
import { w3 } from "@/src/utils/w3";
import MetaMaskIcon from "../assets/svg/metamask-icon.svg";

export function WalletStatus({
  connected,
  account,
  setAccount,
  setContract,
  setConnected,
}) {
  return connected ? (
    <WalletDisplay
      account={account}
      setContract={setContract}
      setConnected={setConnected}
      setAccount={setAccount}
    />
  ) : (
    <WalletConnect />
  );
}

function WalletDisplay({ account, setAccount, setContract, setConnected }) {
  return (
    <>
      <div className="connected-to__group">
        <div className="connected-to__title">Connected Address</div>
        <div className="connected-to__address">
          {account.slice(0, 5)}...{account.slice(-4)}
        </div>
      </div>
      <ButtonBase
        variant={"cta"}
        onClick={() => disconnect()}
        customClass="collapse-inline-margin"
      >
        Click to disconnect
      </ButtonBase>
    </>
  );

  async function disconnect() {
    setAccount("");
    setConnected(false);
    setContract(null);
  }
}

function WalletConnect() {
  return (
    <>
      {typeof window !== "undefined" && !window.ethereum && (
        <div className="metamask-hint">
          <div className="metamask-icon-box">
            <MetaMaskIcon className="metamask-icon" />
          </div>
          <p>
            You need a{" "}
            <span className="inline-grad-text variant-3">MetaMask</span> wallet
            to be able to mint.
          </p>
          <p>
            Please click{" "}
            <a
              className="link variant-5"
              href="https://metamask.io/download/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            to install MetaMask.
          </p>
        </div>
      )}
      <ButtonBase
        variant="primary"
        customClass="collapse-inline-margin"
        onClick={() => {
          if (typeof window !== "undefined" && !window.ethereum) {
          } else if (window.ethereum) {
            w3.connectWallet();
          }
        }}
      >
        CONNECT WALLET
      </ButtonBase>
    </>
  );
}
