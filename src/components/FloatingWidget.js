import React from "react";
import { motion } from "framer-motion";
import { socialMedia } from "@/src/data/social-media";

const FloatingWidget = ({ item: _item }) => {
  const { icon, link } = socialMedia.find((item) => item.label === _item);

  const variantsIcon = {
    initial: {
      x: "28px",
      opacity: 0.7,
    },
    hover: {
      x: "20px",
      opacity: 1,
    },
  };

  const variantsLabel = {
    initial: {
      x: "120px",
      opacity: 0.3,
    },
    hover: {
      x: "-15px",
      opacity: 1,
    },
  };

  const transiation = {
    duration: 0.5,
    repeat: Infinity,
    repeatDelay: 2,
    repeatType: "mirror",
  };

  return (
    <a
      href={link}
      className="widget__link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="widget">
        <motion.div
          className="widget__icon"
          variants={variantsIcon}
          initial="initial"
          animate="hover"
          exit="initial"
          key={0}
          transition={transiation}
        >
          {icon}
        </motion.div>
        <motion.div
          className="widget__label"
          variants={variantsLabel}
          initial="initial"
          animate="hover"
          exit="initial"
          key={1}
          transition={transiation}
        >
          Join Discord
        </motion.div>
      </div>
    </a>
  );
};

export default FloatingWidget;
