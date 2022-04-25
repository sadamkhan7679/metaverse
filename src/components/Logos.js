import React from "react";
import { StrobeText, Paragraph, Headline } from "./SplashScreen/Text";
import { motion } from "framer-motion";

// svg images
import LogoMcQueen from "../assets/image/logos/alexander-mcqueen.svg";
import LogoArsenal from "../assets/image/logos/arsenal.svg";
import LogoAtlantic from "../assets/image/logos/atlantic-records.svg";
import LogoAudi from "../assets/image/logos/audi.svg";
import LogoFortnite from "../assets/image/logos/fortnite.svg";
import LogoHarry from "../assets/image/logos/harry-potter.svg";
import LogoHyundai from "../assets/image/logos/hyundai.svg";
import LogoNike from "../assets/image/logos/nike.svg";
import LogoSony from "../assets/image/logos/sony.svg";
import LogoStarWars from "../assets/image/logos/star-wars.svg";
import LogoVogue from "../assets/image/logos/vogue.svg";
import LogoWarner from "../assets/image/logos/warner-bros.svg";
import LogoUnreal from "../assets/image/logos/unreal-full.svg";

const Logos = () => {
  return (
    <>
      <section className="brand-logos">
        <header className="section__header">
          <Headline>Collaboration</Headline>
          <StrobeText>Brands</StrobeText>
          <Paragraph className="center">
            These are some of the brands that our team members worked with
            throughout their career.
          </Paragraph>
        </header>
        <motion.div
          className="brand-logos__grid"
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          variants={listContainer}
        >
          {logoData.map((item, i) => (
            <Logo data={item} key={i} />
          ))}
        </motion.div>
      </section>
      <section className="brand-logos">
        <header className="section__header">
          <Headline className="brand__powered">Powered By</Headline>
          {/* <StrobeText>Brands</StrobeText> */}
          <LogoUnreal className="brand-logo__image powered-by" />
        </header>
      </section>
    </>
  );
};

export default Logos;

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: [1.1, 1],
    transition: {
      duration: 0.2,
    },
  },
};

const Logo = ({ data }) => {
  const { logoImage } = data;

  return (
    <motion.div className="brand-logo" variants={listItem}>
      {logoImage}
    </motion.div>
  );
};

const logoData = [
  { logoImage: <LogoMcQueen className="brand-logo__image" /> },
  { logoImage: <LogoArsenal className="brand-logo__image" /> },
  { logoImage: <LogoAtlantic className="brand-logo__image" /> },
  { logoImage: <LogoAudi className="brand-logo__image" /> },
  { logoImage: <LogoFortnite className="brand-logo__image" /> },
  { logoImage: <LogoHarry className="brand-logo__image" /> },
  { logoImage: <LogoHyundai className="brand-logo__image" /> },
  { logoImage: <LogoNike className="brand-logo__image" /> },
  { logoImage: <LogoSony className="brand-logo__image" /> },
  { logoImage: <LogoStarWars className="brand-logo__image" /> },
  { logoImage: <LogoVogue className="brand-logo__image" /> },
  { logoImage: <LogoWarner className="brand-logo__image" /> },
];
