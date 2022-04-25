import * as React from "react";
import Link from "next/link";
import Layout from "@/src/components/Layout";
import Seo from "@/src/components/Seo";
import Logo from "@/src/components/SplashScreen/Logo";
import { StrobeText } from "@/src/components/SplashScreen/Text";
import Socials from "@/src/components/SplashScreen/Socials";
import Head from "next/head";

const NotFoundPage = () => (
  <Layout className="lock-view">
    <Head>
      <title>Paradox Metaverse | 404: Not found</title>
    </Head>

    <Logo />
    <section className="section-content-box">
      <div className="not-found">
        <StrobeText>404: Not Found</StrobeText>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Looks like you've wandered off into the abbyss..</p>
        <p>
          <Link className="link" href="/" passHref>
            <a>Go back to homepage</a>
          </Link>
        </p>
      </div>
    </section>
    <Socials />
  </Layout>
);

export default NotFoundPage;
