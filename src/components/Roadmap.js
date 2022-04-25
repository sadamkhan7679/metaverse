import React from "react";
import { Headline, StrobeText } from "./SplashScreen/Text";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonBase } from "./Button";
import Image from "next/image";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap__grid"></div>
      <div className="roadmap__content">
        <header className="section__header">
          <Headline>Everything starts somewhere</Headline>
          <StrobeText className="roadmap__heading">The Blueprint</StrobeText>
        </header>
        <AnimatePresence>
          <motion.div
            className="roadmap__building"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            onAnimationEnd={() => console.log("stop")}
            variants={{
              visible: { opacity: [0, 0.8, 1], x: ["0vw", "0vw", "-50vw"] },
              hidden: { opacity: 0 },
            }}
          >
            <Image
              style={{
                height: "95%",
                marginTop: "50px",
                marginBottom: "50px",
              }}
              className="roadmap__building--image"
              objectFit="contain"
              src="/image/building-side.png"
              alt=""
              layout="fill"
            />
          </motion.div>
        </AnimatePresence>

        <div className="roadmap__list-box">
          <AnimatePresence>
            <motion.ul
              className="roadmap__list"
              viewport={{ once: true }}
              initial="hidden"
              whileInView="show"
              variants={listContainer}
            >
              {roadmapData.map((item, i) => (
                <RoadmapListItem key={i} item={item} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
      <a
        className="link link__wrapper roadmap__button"
        href="https://amio-talio.gitbook.io/paradox-whitepaper/paradox-metaverse/table-of-contents"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonBase>Full Blueprint and Whitepaper</ButtonBase>
      </a>
    </div>
  );
};

export default Roadmap;

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      when: "beforeChildren",
      staggerChildren: 0.8,
      staggerDirection: -1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const RoadmapListItem = ({ item }) => {
  return (
    <motion.li variants={listItem} className="roadmap__item">
      <motion.div
        className="roadmap-item__pointer"
        style={{
          marginLeft: `${item.spacing * 4}px`,
          width: `calc(100% - ${item.spacing * 4}px)`,
        }}
      >
        <motion.div className="roadmap-item__line"></motion.div>
        <svg
          className="roadmap-item__point"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" />
        </svg>
      </motion.div>

      <motion.div
        className="roadmap-item__content"
        style={{ paddingLeft: `${item.spacing}vw` }}
      >
        <motion.div
          className="roadmap-item__date"
          dangerouslySetInnerHTML={{ __html: item.date }}
        />
        <StrobeText className="roadmap-item__title">{item.title}</StrobeText>
      </motion.div>
    </motion.li>
  );
};

const roadmapData = [
  {
    date: `Q2 late June 2022`,
    title: "Paradox Game Launch",
    spacing: 13,
  },
  {
    date: `Q2 June 2022`,
    title: "Central exchange listing",
    spacing: 17,
  },
  {
    date: `Q2 May 2022`,
    title: "$PARA presale",
    spacing: 18,
  },
  {
    date: `Q2 May 2022 `,
    title: "Minting period",
    spacing: 17,
  },
  {
    date: `Q1 March 2022`,
    title: "Beta testing Stage",
    spacing: 19,
  },
  {
    date: `Q3 August 2021`,
    title: "Paradox Studio designed and develop game concepts",
    spacing: 30,
  },
];
