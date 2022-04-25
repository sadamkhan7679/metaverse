// import React from "react"
import React from "react";

import Layout from "@/src/components/Layout";
import Utilities from "@/src/components/Utilities";
import Seo from "@/src/components/Seo";
import Coin from "@/src/components/Coin";
import Head from "next/head";

const BenefitsPage = () => {
  return (
    <Layout className="subpage">
      <Head>
        <title>Paradox Metaverse | Utilities</title>
      </Head>
      <Utilities />
      <Coin />
    </Layout>
  );
};

export default BenefitsPage;
