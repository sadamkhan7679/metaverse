import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import { Headline, StrobeText } from "./SplashScreen/Text";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-section__content">
        <header className="section__header" style={{ paddingBottom: "10px" }}>
          <Headline>Enter the metaverse</Headline>
          <StrobeText className="text--heading">Paradox</StrobeText>
          <AnimatePresence>
            <motion.div
              className="animated-tags__list"
              viewport={{ once: true }}
              initial="hidden"
              whileInView="show"
              variants={tagsContainer}
            >
              <motion.div className="animated-tags__item" variants={tagsItem}>
                <div className="animated-tags__text">Play to Earn</div>
              </motion.div>
              <motion.div className="animated-tags__item" variants={tagsItem}>
                <div className="animated-tags__text">NFT</div>
              </motion.div>
              <motion.div className="animated-tags__item" variants={tagsItem}>
                <div className="animated-tags__text">Gaming</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </header>
        <section>
          <div className="video__box">
            {/* <div ref={ref} className="video__embed-box"> */}
            <div className="video__embed-box">
              <Vimeo
                className="video__embed"
                video="699820097"
                controls={true}
                muted={true}
                responsive={true}
                // paused={!isPlaying}
              />
            </div>
          </div>
        </section>
      </div>
      {/* <div className="background__city">
        <StaticImage
          style={{ width: "200vw" }}
          src="../../assets/image/city.png"
          alt=""
        />
      </div> */}
      <div className="video-section__background">
        <div className="background__city-skyline">
          <Image
            // imgStyle={{
            //   objectPosition: "bottom",
            //   // width: "100vw",
            //   // minWidth: "100vw",
            //   // maxWidth: "100vw",
            // }}
            style={{
              height: "100%",
              width: "100vw",
              minWidth: "100vw",
              maxWidth: "100vw",
            }}
            src="/image/city-skyline.png"
            //objectFit="cover"
            alt="city-skyline"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

const tagsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const tagsItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
