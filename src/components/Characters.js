import React, { useState } from "react";
import { motion } from "framer-motion";

import { Headline, Paragraph, StrobeText } from "./SplashScreen/Text";
import { BiChevronDown } from "react-icons/bi";
import Vimeo from "@u-wave/react-vimeo";
import { ButtonBase } from "./Button";
import Image from "next/image";
import Link from "next/link";

const Characters = () => {
  // const [ref, inView] = useInView({ threshold: 1 })
  // const [isPlaying, setPlaying] = useState(false)
  // const handlePlay = () => setPlaying(true)
  // const handleStop = () => setPlaying(false)

  // useEffect(() => {
  //   if (!inView) handleStop()
  //   if (inView) handlePlay()
  // }, [inView])

  return (
    <>
      <section className="characters_video-section">
        <div className="video__box with-margin">
          {/* <div ref={ref} className="video__embed-box"> */}
          <div className="video__embed-box">
            <Vimeo
              className="video__embed"
              video="698621877"
              controls={true}
              muted={true}
              responsive={true}
            />
          </div>
        </div>
      </section>
      <section className="characters">
        <header className="section__header">
          <Headline>The</Headline>
          <StrobeText>Rascals</StrobeText>
        </header>

        {/* Cain */}
        <CharacterCard index={0}>
          <Background>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transformOrigin: "0% 0%" }}
              style={{ height: "auto" }}
              src="/image/characters/cain/cain-bg.jpg"
              alt="cain-bg"
              layout="fill"
              // width={920}
              // height={261}
              objectFit="contain"
            />
            <CharacterOverlay />
          </Background>
          <CharacterName>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transform: "scale(0.8)", transformOrigin: "100% 0%" }}
              src="/image/characters/cain/cain-title.png"
              objectFit="contain"
              layout="fill"
              style={{ height: "auto" }}
              // width={920}
              // height={261}
              alt="Introducting Cain, a.k.a Mr C"
            />
          </CharacterName>
          <CharacterInfo>
            <Paragraph className="character__info to-right">
              The one who betrayed Dexter during their final mission. He
              discovered the power of the lost tech they had been sent to
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              retrieve - 'The Singularity drive', an infinite power source
              developed by an ancient civilization and used it to found and
              develop ‘Paradox City’.
              {/* <br />
              <br /> */}
              <br />
              <br />
              The singularity Drive has also allowed Cain to develop previously
              unforeseen technology such as the ‘Transportation Portals’
              utilized in ‘Paradox City’.
              {/* <br />
              <br />
              Recently Cain has faced his own betrayal as the Police Robots he
              himself had designed have started to develop their own free will. */}
              {/* evolving from simple machines into full fledged AI.
              <br />
              <br />
              The Paradox PD, a fully autonomous police department is now
              hunting Cain - their very maker! They have made him the most
              wanted man in Paradox City and have plastered his wanted posters
              all over the city in their efforts to capture him... but they have
              yet to succeed. */}
            </Paragraph>
          </CharacterInfo>
        </CharacterCard>

        {/* Billy */}
        <CharacterCard index={1}>
          <Background>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transformOrigin: "0% 0%" }}
              style={{ height: "auto" }}
              src="/image/characters/billy/billy-bg.jpg"
              alt="billy-bg"
              layout="fill"
              // width={920}
              // height={261}
              objectFit="contain"
            />
            <CharacterOverlay />
          </Background>
          <CharacterName>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{
                transform: "scale(0.8)",
                transformOrigin: "0% 0%",
              }}
              layout="fill"
              // width={920}
              // height={261}
              src="/image/characters/billy/billy-title.png"
              alt="Introducing Billy, a.k.a The Kid"
            />
          </CharacterName>
          <CharacterInfo>
            <Paragraph className="character__info to-left">
              He Currently salvages various lost tech in order to develop new
              weapons systems for the Rascals. Upon Cain’s return from the final
              mission, he claimed that Dexter had died on the mission, but Billy
              always had doubts.
              <br />
              <br />
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Should he ever discover the truth of Cain's betrayal, his
              loyalties would be with his former leader Dexter, even at the cost
              of Paradox City itself.
            </Paragraph>
          </CharacterInfo>
        </CharacterCard>

        {/* Darwin */}
        <CharacterCard index={2}>
          <Background>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transformOrigin: "0% 0%" }}
              style={{ height: "auto" }}
              src="/image/characters/darwin/darwin-bg.jpg"
              alt="darwin-bg"
              layout="fill"
              // width={920}
              // height={261}
              objectFit="contain"
            />
            <CharacterOverlay />
          </Background>
          <CharacterName>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{
                transform: "scale(0.8)",
                transformOrigin: "100% 0%",
              }}
              layout="fill"
              // width={920}
              // height={261}
              src="/image/characters/darwin/darwin-title.png"
              alt="Introducing Darwin, a.k.a Fluffy"
            />
          </CharacterName>
          <CharacterInfo>
            <Paragraph className="character__info to-right">
              Mad Scientist of the Rascals! He enjoys causing chaos and mischief
              around Paradox City, stealing art and anything that catches his
              fancy and selling it on the black market. He is cute, but
              dangerous, using the city as his own personal playground.
            </Paragraph>
          </CharacterInfo>
        </CharacterCard>

        {/* Samurai */}
        <CharacterCard index={3}>
          <Background>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transformOrigin: "0% 0%" }}
              style={{ height: "auto" }}
              src="/image/characters/samurai/samurai-bg.jpg"
              alt="samurai-bg"
              layout="fill"
              // width={920}
              // height={261}
              objectFit="contain"
            />
            <CharacterOverlay />
          </Background>
          <CharacterName>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{
                transform: "scale(0.8)",
                transformOrigin: "0% 0%",
              }}
              src="/image/characters/samurai/samurai-title.png"
              layout="fill"
              // width={920}
              // height={261}
              alt="Introudcing Akiro, a.k.a The Ronin Samurai"
            />
          </CharacterName>
          <CharacterInfo>
            <Paragraph className="character__info to-left">
              The only AI robot Cain made using the power of the Singularity
              Drive - Fearing his potential, Cain never made another AI on the
              same level as Akiro - one with a free will of its own.
              <br />
              <br />
              Akiro realizing that the other robots in Paradox City had no souls
              of their own and were merely machine slaves, he secretly has put a
              plan in place to overthrow his own maker Cain by installing his AI
              code into the Paradox Police Department and has ambitions to take
              over Paradox City for himself.
            </Paragraph>
          </CharacterInfo>
        </CharacterCard>

        {/* Dexter */}
        <CharacterCard index={4}>
          <Background>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transformOrigin: "0% 0%" }}
              style={{ height: "auto" }}
              src="/image/characters/dexter/dexter-bg.jpg"
              alt="Dexter"
              layout="fill"
              // width={920}
              // height={261}
              objectFit="contain"
            />
            <CharacterOverlay />
          </Background>
          <CharacterName>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{
                transform: "scale(0.8)",
                transformOrigin: "100% 0%",
              }}
              src="/image/characters/dexter/dexter-title3.png"
              layout="fill"
              // width={920}
              // height={261}
              alt="Introducing Dexter"
            />
          </CharacterName>
          <CharacterInfo>
            <Paragraph className="character__info to-right">
              Betrayed by Cain on their final mission and was locked in his
              cryo-pod in suspended animation until eventually waking up in an
              unfamiliar place, Paradox City.
              <br />
              <br />
              Founded his new gang the Rascals in his efforts to seek revenge on
              Cain. He is willing to get his revenge at any cost, however Dexter
              has to decide whether his own personal vengeance against Cain can
              be weighed against the potential fate of Paradox City. Will he be
              forced to choose the lesser of two evils?
            </Paragraph>
          </CharacterInfo>
        </CharacterCard>

        {/* Robot */}
        <CharacterCard index={5}>
          <Background>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{ transformOrigin: "0% 0%" }}
              style={{ height: "auto" }}
              src="/image/characters/robo/robo-bg.jpg"
              layout="fill"
              // width={920}
              // height={261}
              alt="Akiro"
              objectFit="contain"
            />
            <CharacterOverlay />
          </Background>
          <CharacterName>
            <Image
              loading="eager"
              className="character-card__image"
              imgStyle={{
                transform: "scale(0.8)",
                transformOrigin: "0% 0%",
              }}
              src="/image/characters/robo/robo-title.png"
              layout="fill"
              // width={920}
              // height={261}
              alt="Introducing AIPD"
            />
          </CharacterName>
          <CharacterInfo>
            <Paragraph className="character__info to-left">
              The main law enforcement of Paradox City, the first and last line
              of defense for keeping the peace. Initially was designed by Cain
              to be a police department that could not be corrupted, bribed or
              abuse their power.
              <br />
              <br />
              An idea that seems rational on paper, but there was one flaw...
              the AI code injected into them by Akiro which has now transformed
              them from simple machines into full fledged AI. They now seek to
              capture their own maker Cain.
            </Paragraph>
          </CharacterInfo>
        </CharacterCard>
      </section>

      <section>
        <Paragraph className="center">
          Players will be able to achieve varying levels of reward to be
          credited in <strong>$PARA</strong> tokens as they complete character
          specific missions.
        </Paragraph>

        <Link href="/benefits" passHref className="link link__wrapper">
          <ButtonBase className="benefits__button">
            Utilities &amp; Benefits
          </ButtonBase>
        </Link>
      </section>
    </>
  );
};

export default Characters;

const CharacterCard = ({ children, index }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <motion.div
      className={`character-card ${expanded ? "is-expanded" : ""}`}
      initial="collapsed"
      exit="collapsed"
      animate={{ height: expanded ? "auto" : "min(40vw, 320px)" }}
      onClick={() => handleExpand()}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="character-card__icon">
        <BiChevronDown />
      </div>
      {children}
    </motion.div>
  );
};

const CharacterOverlay = ({ children }) => (
  <div className="character-card__overlay">{children}</div>
);
const Background = ({ children }) => (
  <div className="character-card__background">{children}</div>
);
const CharacterName = ({ children }) => (
  <div className="character-card__name">{children}</div>
);
const CharacterInfo = ({ children }) => (
  <div className="character-card__info">{children}</div>
);
