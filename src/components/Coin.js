import React from "react";
// import Vimeo from "@u-wave/react-vimeo"
import { Headline, Paragraph, StrobeText } from "./SplashScreen/Text";
import Image from "next/image";

const Coin = () => {
  return (
    <section className="coin__section">
      <header className="section__header">
        <Headline>Native Paradox City Currency</Headline>
        <StrobeText>
          <strong>$PARA</strong>
        </StrobeText>
        {/* <Paragraph>Lorem ipsum dolor sit amet consectetur.</Paragraph>   */}
      </header>
      <article className="coin__panel">
        <div className="coin__panel-video">
          <Image
            // loading="eager"
            className="coin__image"
            // imgStyle={{ transformOrigin: "0% 0%" }}
            src="/image/coin-bg.jpg"
            alt="coin-bg"
            layout="fill"
          />
        </div>

        <div className="coin__panel-overlay"></div>

        <div className="coin__panel-content">
          <Paragraph>
            The <strong>Paradox Token</strong> is what the economy of{" "}
            <strong>The Paradox Metaverse</strong> will run on. It has various
            capabilities - rewarding players in game, being used to mint future
            collections or simply swaping for USDT so you can use it in the real
            world.
          </Paragraph>
          <Paragraph>
            <ul className="coin__list">
              <li className="coin__list-item">
                only nft holders will be able to purchase $para token on presale
              </li>
              <li className="coin__list-item">
                Earn $Para tokens when completeing in game missions
              </li>
              <li className="coin__list-item">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                earn $para tokens by staking your nft's
              </li>
              {/* <li className="coin__list-item">
                Reward for renting an income for renting
              </li> */}
              <li className="coin__list-item">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Random Airdrops of a $para tokens and nft's to holders
              </li>
              {/* <li className="coin__list-item">Runs in-game economy</li> */}
              <li className="coin__list-item">
                A portion of Transaction fees will be distributed to $para token
                stakers
              </li>
              {/* <li className="coin__list-item">
                Currency of in-house marketplace
              </li> */}
              {/* <li className="coin__list-item">Minting future collections</li> */}
              {/* <li className="coin__list-item">
                Usable in other metaverses - <em>not yet confirmed</em>
              </li> */}
            </ul>
          </Paragraph>

          {/* <ButtonBase className="coin__panel-button">Explore</ButtonBase> */}
        </div>
      </article>
    </section>
  );
};

export default Coin;
