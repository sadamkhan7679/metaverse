import React, { useState } from "react";
import { Headline, StrobeText } from "./SplashScreen/Text";
import { motion } from "framer-motion";
import { ButtonBase } from "./Button";
import Image from "next/image";

const Utilities = () => {
  const [current, setCurrent] = useState(1);

  return (
    <section className="utils utils__section">
      <header className="section__header">
        <Headline>You can gain everything</Headline>
        <StrobeText>Utilities and Benefits</StrobeText>
      </header>
      <article className="utils__panel">
        <div className="utils__heading">Paradox</div>

        <Headline className="utils__headline">City</Headline>

        <div className="utils__background-box">
          <Image
            className={`utils__image`}
            objectFit="contain"
            loading="eager"
            // imgStyle={
            //   {
            //     // width: "100%",
            //     // maxWidth: "617px",
            //     // objectFit: "contain",
            //   }
            // }
            // style={{ width: "100%", maxWidth: "617px", objectFit: "contain" }}
            src="/image/city.png"
            alt="city"
            layout="fill"
          />
        </div>
        <div className="utils__button-group">
          <ButtonBase onClick={() => setCurrent(1)} className="utils__button">
            Sector 1
          </ButtonBase>
          <ButtonBase onClick={() => setCurrent(2)} className="utils__button">
            Sector 2
          </ButtonBase>
          <ButtonBase onClick={() => setCurrent(3)} className="utils__button">
            Sector 3
          </ButtonBase>
          <ButtonBase onClick={() => setCurrent(4)} className="utils__button">
            Sector 4
          </ButtonBase>
        </div>
        <UtilsInfo areaId={current} />
      </article>
    </section>
  );
};

export default Utilities;

const UtilsInfo = ({ areaId }) => {
  const { content } = utilsData.find((item) => item.id === areaId);

  return (
    <section>
      <Headline>Sector {areaId}</Headline>
      <SectionInfo content={content} />
    </section>
  );
};

const SectionInfo = ({ content }) => {
  return (
    <motion.div
      className="utils__info-box"
      dangerouslySetInnerHTML={{ __html: content }}
    ></motion.div>
  );
};

const utilsData = [
  {
    id: 1,
    content: `
      <h3>All NFTs belong to you!</h3>
      <p>All NFTs are fully on-chain, made using the Unreal Engine 5 from the ground up. Owners will own the IP of each character.</p>
      <h3>Airdrops</h3>
      <p>All NFT holders will be automatically whitelisted for the presale of the Paradox Coin when it launches on 27<sup>th</sup> May and will be automatically airdropped <strong>$PARA</strong> coins as a reward for holding the NFTs.</p>
    `,
  },
  {
    id: 2,
    content: `
      <h3>RENT OUT YOUR NFT</h3>
      <p>Allow others to pay you to use your NFT character to earn while they're playing the game, allowing the NFT holders to earn passive income when not using their NFTs.</p>
      <h3>Stake your NFT</h3>
      <p>Earn passive income in <strong>$PARA</strong> token when you stake your NFT in The Paradox Metaverse.</p>
      <h3>Earn When you play</h3>
      <p>Only NFT holders - "citizens", will be able to earn <strong>$PARA</strong> token while you play and complete missions with your NFT character!</p>
    `,
  },
  {
    id: 3,
    content: `
      <h3>Earn bonus rewards!</h3>
      <p>All you have to do is be active!<br />
      Utilising other in-game assets such as land, clubs and cars will earn you <strong>Milestones</strong> that are rewarded in random NFT airdrops.</p>
    `,
  },
  {
    id: 4,
    content: `
      <h2>Paradox Marketplace</h2>
      <h3>One Coin to rule the Paradox Metaverse</h3>
      <p><strong>$PARA</strong> will be the official token of the marketplace.</p>
      <h3>Shop Till You Drop!</h3>
      <p>A marketplace designed to reward the stakers!<br />
      All the benefits go to our users as all  transaction fees on the Paradox Marketplace go back to the stakers of Paradox!</p>
    `,
  },
];
