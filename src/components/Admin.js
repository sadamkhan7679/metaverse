import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Amplify from "@aws-amplify/core";
import { DataStore } from "@aws-amplify/datastore";

import { WalletBalance } from "@/src/utils/models";

Amplify.configure({});

export function Admin({
  connected,
  account,
  tokenPrice,
  isPaused,
  isPresale,
  baseURI,
  owner,
  contract,
  setOwner,
  setBaseURI,
  setTokenPrice,
  setIsPresale,
  setIsPaused,
  setTotalSupply,
}) {
  const [data, setData] = useState([]);
  const [newPrice, setNewPrice] = useState(null);
  const [newPaused, setNewPaused] = useState(null);
  const [newPresale, setNewPresale] = useState(null);
  const [newBaseURI, setNewBaseURI] = useState(null);
  const [newOwner, setNewOwner] = useState(null);

  useEffect(() => {
    if (connected) {
      getAllData();
      const subscription = DataStore.observe(WalletBalance).subscribe(() =>
        getAllData()
      );
      return () => subscription.unsubscribe();
    }
  }, [account]);

  return (
    <>
      <label className="form-label" htmlFor="price">
        <span>Price</span>
        <span>{tokenPrice ? tokenPrice : "? "}ETH</span>
      </label>
      <div className="form-group">
        <input
          name="price"
          className="input"
          type="number"
          step="any"
          onChange={(e) => handleInputPrice(e)}
        />
        <button className="form-btn" onClick={() => setPrice()}>
          Set Price
        </button>
      </div>

      <label className="form-label" htmlFor="paused">
        <span>Paused</span>
        <span>{isPaused ? "Paused" : "Running"}</span>
      </label>
      <div className="form-group">
        <select name="paused" className="input" onChange={setNewPaused}>
          <option value="false">Pause</option>
          <option value="true">Run</option>
        </select>
        <button className="form-btn" onClick={() => setPaused()}>
          Set
        </button>
      </div>
      <label className="form-label" htmlFor="presale">
        <span>Presale</span>
        <span>{isPresale ? "Active" : "Not Active"}</span>
      </label>
      <div className="form-group">
        <select name="presale" className="input" onChange={setNewPresale}>
          <option value="false">Stop</option>
          <option value="true">Start</option>
        </select>
        <button className="form-btn" onClick={() => setPresale()}>
          Set
        </button>
      </div>
      <label className="form-label" htmlFor="base-uri">
        <span>Contract BaseURI</span>
        <span>{baseURI?.slice(0, 15)}...</span>
        {baseURI?.slice(-10)}
      </label>
      <div className="form-group">
        <input
          name="base-uri"
          type="text"
          className="input"
          onChange={setNewBaseURI}
        />
        <button className="form-btn" onClick={() => setBaseURI()}>
          Set
        </button>
      </div>
      <label className="form-label" htmlFor="ownership">
        <span>Current Contract Owner</span>
        <span>
          {owner?.slice(0, 5)}...{owner?.slice(-4)}
        </span>
      </label>
      <div className="form-group">
        <input
          name="ownership"
          className="input"
          type="text"
          onChange={(e) => handleInputOwner(e)}
        />
        <button className="form-btn" onClick={() => setOwner()}>
          Transfer Ownership
        </button>
      </div>
      {data.length > 0 && "implement export"}
    </>
  );

  function handleInputOwner(event) {
    const value = event.target.value;
    if (!ethers.utils.isAddress(value)) {
      alert("Must be an address");
    } else setNewOwner(value);
  }

  async function setPrice() {
    try {
      const tx = await contract.setPrice(newPrice);
      const receipt = await tx.wait();
      if (receipt === 1) {
        setTokenPrice(ethers.utils.formatEther(newPrice));
      }
    } catch (e) {
      alert(e);
    }
  }

  async function setPaused() {
    try {
      const tx = await contract.setPaused(newPaused);
      const receipt = await tx.wait();
      if (receipt === 1) {
        setIsPaused(newPaused);
      }
    } catch (e) {
      alert(e);
    }
  }

  async function setPresale() {
    try {
      const tx = await contract.setPresale(newPresale);
      const receipt = await tx.wait();
      if (receipt === 1) {
        setIsPresale(newPresale);
      }
    } catch (e) {
      alert(e);
    }
  }

  async function setBaseURI() {
    try {
      const tx = await contract.setBaseURI(newBaseURI);
      const receipt = await tx.wait();
      if (receipt === 1) {
        setBaseURI(newBaseURI);
      }
    } catch (e) {
      alert(e);
    }
  }

  async function setOwner() {
    try {
      const tx = await contract.transferOwnership(newOwner);
      const receipt = await tx.wait();
      if (receipt === 1) {
        setOwner(newOwner);
      }
    } catch (e) {
      alert(e);
    }
  }

  async function getAllData() {
    let dataStoreItems = await DataStore.query(WalletBalance);
    let data = dataStoreItems.map((item) => {
      return {
        id: item.id,
        wallet: item.wallet,
        balance: item.balance,
        timestamp: item.createdAt,
      };
    });

    setData(data);
  }

  function handleInputPrice(event) {
    const value = event.target.value;
    if (value < 0) {
      alert("Price need to be greater than zero.");
    } else setNewPrice(ethers.utils.parseEther(String(value)));
  }
}
