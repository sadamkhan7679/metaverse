import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Layout from "@/src/components/Layout";
import Seo from "@/src/components/Seo";

import { Minter } from "@/src/components/Minter";
import { Admin } from "@/src/components/Admin";
import Head from "next/head";

export default function Mint() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [tokenPrice, setTokenPrice] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isPresale, setIsPresale] = useState(false);
  const [baseURI, setBaseURI] = useState(null);
  const [owner, setOwner] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    if (owner?.toLowerCase() === account?.toLowerCase()) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [account, owner]);

  return (
    <Layout>
      <Head>
        <title>Mint Page</title>
      </Head>
      <section className="no-hero-section place-center">
        <section className="full-with-container">
          <h2 className="header variant-1 text-center">Mint Area</h2>
          <motion.section className="mint-area">
            <Minter
              account={account}
              setAccount={setAccount}
              setConnected={setConnected}
              setContract={setContract}
              connected={connected}
              isPaused={isPaused}
              totalSupply={totalSupply}
              isPresale={isPresale}
              contract={contract}
              setTotalSupply={setTotalSupply}
              tokenPrice={tokenPrice}
              setTokenPrice={setTokenPrice}
              setBaseURI={setBaseURI}
              setOwner={setOwner}
              setIsPaused={setIsPaused}
              setIsPresale={setIsPresale}
            />
          </motion.section>
        </section>
        {!isAdmin && (
          <section className="full-with-container">
            <h2 className="header text-center">Admin</h2>
            <div className="mint-area admin">
              <Admin
                connected={connected}
                account={account}
                tokenPrice={tokenPrice}
                isPaused={isPaused}
                isPresale={isPresale}
                baseURI={baseURI}
                owner={owner}
                contract={contract}
                setBaseURI={setBaseURI}
                setTokenPrice={setTokenPrice}
                setIsPresale={setIsPresale}
                setIsPaused={setIsPaused}
                setTotalSupply={setTotalSupply}
                setIsAdmin={setIsAdmin}
              />
            </div>
          </section>
        )}
      </section>
    </Layout>
  );
}
