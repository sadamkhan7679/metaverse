import React from "react";
import Layout from "@/src/components/Layout";
import ContactUs from "@/src/components/Contact";
import Head from "next/head";

const ContactUsPage = () => {
  return (
    <Layout className="subpage">
      <Head>
        <title>Paradox Metaverse | Contact Us</title>
      </Head>
      <ContactUs />
    </Layout>
  );
};

export default ContactUsPage;
