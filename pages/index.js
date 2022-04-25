// import React from "react"
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
// import SplashScreen from "../components/SplashScreen"
// import Roadmap from "../components/Roadmap"
// import Characters from "../components/Characters"
// import Team from "../components/Team"
// import Logos from "../components/Logos"
// import VideoSection from "../components/VideoSection"
// import Faq from "../components/Faq"
// import Articles from "../components/Articles"
// import AdvisoryBoard from "../components/AdvisoryBoard"
import { config } from "@/src/config";
import Layout from "@/src/components/Layout";
import Seo from "@/src/components/Seo";
import Head from "next/head";
import Popup from "@/src/components/Popup";
import { useAppContext } from "@/src/hooks/useAppContext";

const SplashScreen = dynamic(() => import("@/src/components/SplashScreen"));
const Roadmap = dynamic(() => import("@/src/components/Roadmap"));
const Characters = dynamic(() => import("@/src/components/Characters"));
const Team = dynamic(() => import("@/src/components/Team"));
const Logos = dynamic(() => import("@/src/components/Logos"));
const VideoSection = dynamic(() => import("@/src/components/VideoSection"));
const Faq = dynamic(() => import("@/src/components/Faq"));
const Articles = dynamic(() => import("@/src/components/Articles"));
const AdvisoryBoard = dynamic(() => import("@/src/components/AdvisoryBoard"));

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false);
  const { checkSubscribed } = useAppContext();

  const handlePopupClose = () => setOpen(false);
  const handlePopupOpen = () => setOpen(true);

  const awaitPopup = async () => {
    await new Promise((r) => setTimeout(r, 5 * 1000));
    handlePopupOpen();
  };

  useEffect(() => {
    if (!config.showPopup || checkSubscribed()) return;

    awaitPopup();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Paradox Metaverse</title>
      </Head>
      <SplashScreen />
      {/*<LazyLoad height={3400} offset={100} once>*/}
      <VideoSection />
      {/*</LazyLoad>*/}
      <LazyLoad height={1500} offset={100} once>
        <Roadmap />
      </LazyLoad>
      <LazyLoad height={3100} offset={100} once>
        <Characters />
      </LazyLoad>
      <LazyLoad height={1050} offset={100} once>
        <Team />
      </LazyLoad>
      <LazyLoad height={630} offset={100} once>
        <AdvisoryBoard />
      </LazyLoad>

      <LazyLoad height={1500} offset={100} once>
        <Logos />
      </LazyLoad>
      <LazyLoad height={375} offset={100} once>
        <Faq />
      </LazyLoad>
      <LazyLoad height={560} offset={100} once>
        <Articles />
      </LazyLoad>
      {/*<VideoSection />*/}
      {/*<Roadmap />*/}
      {/*<Characters />*/}
      {/*<Team />*/}
      {/*<AdvisoryBoard />*/}
      {/*<Logos />*/}
      {/*<Faq />*/}
      {/*<Articles />*/}
      <AnimatePresence initial={false}>
        <Popup isOpen={isOpen} handleClose={handlePopupClose} />
      </AnimatePresence>
    </Layout>
  );
};

export default IndexPage;
