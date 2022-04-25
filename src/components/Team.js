import React from "react";
import { ButtonBase } from "./Button";
import { Headline, StrobeText } from "./SplashScreen/Text";
import Image from "next/image";

const Team = () => {
  return (
    <section className="team">
      <header className="section__header">
        <Headline>Meet The Guys</Headline>
        <StrobeText>THe Paradox Team</StrobeText>
        {/* <Paragraph className="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolores
          ducimus eos?
        </Paragraph> */}
      </header>

      <div className="team__grid">
        <TeamMember>
          <TeamAvatar>
            <Image
              style={{ borderRadius: "100%" }}
              //imgStyle={{ borderRadius: "100%" }}
              className="team__member-image"
              src="/image/team/amio.jpg"
              alt="amio"
              width={243}
              height={243}
              //layout="fill"
            />
          </TeamAvatar>
          <TeamInfo>
            <TeamName>Amio Talio</TeamName>
            <TeamTitle>Founder</TeamTitle>
          </TeamInfo>
        </TeamMember>

        <TeamMember>
          <TeamAvatar>
            <Image
              style={{ borderRadius: "100%" }}
              //imgStyle={{ borderRadius: "100%" }}
              className="team__member-image"
              src="/image/team/fasial.jpg"
              alt="fasial"
              width={243}
              height={243}
              //layout="fill"
            />
          </TeamAvatar>
          <TeamInfo>
            <TeamName>Fasial Tariq</TeamName>
            <TeamTitle>Co-founder</TeamTitle>
          </TeamInfo>
        </TeamMember>

        <TeamMember>
          <TeamAvatar>
            <Image
              style={{ borderRadius: "100%" }}
              //imgStyle={{ borderRadius: "100%" }}
              className="team__member-image"
              src="/image/team/rob.jpg"
              alt="rob"
              width={243}
              height={243}
              //layout="fill"
            />
          </TeamAvatar>
          <TeamInfo>
            <TeamName>Robert Jamborski</TeamName>
            <TeamTitle>Lead Developer</TeamTitle>
          </TeamInfo>
        </TeamMember>
      </div>

      {/* these should be blurred */}
      <div className="team__blurred">
        <div className="team__grid">
          <TeamMember className="blurred">
            <TeamAvatar>
              <Image
                style={{ borderRadius: "100%" }}
                //imgStyle={{ borderRadius: "100%" }}
                className="team__member-image"
                src="/image/team/charles.jpg"
                alt="charles"
                width={243}
                height={243}
                //layout="fill"
              />
            </TeamAvatar>
            <TeamInfo>
              <TeamName>Charles Mapira</TeamName>
              <TeamTitle>Marketing Co-ordinator</TeamTitle>
            </TeamInfo>
          </TeamMember>

          <TeamMember className="blurred">
            <TeamAvatar>
              <Image
                style={{ borderRadius: "100%" }}
                //imgStyle={{ borderRadius: "100%" }}
                className="team__member-image"
                src="/image/team/renai.jpg"
                alt="renai"
                width={243}
                height={243}
                //layout="fill"
              />
            </TeamAvatar>
            <TeamInfo>
              <TeamName>Renai Barford</TeamName>
              <TeamTitle>3D Artist</TeamTitle>
            </TeamInfo>
          </TeamMember>

          <TeamMember className="blurred">
            <TeamAvatar>
              <Image
                style={{ borderRadius: "100%" }}
                //imgStyle={{ borderRadius: "100%" }}
                className="team__member-image"
                src="/image/team/aman.jpg"
                alt="aman"
                width={243}
                height={243}
                //layout="fill"
              />
            </TeamAvatar>
            <TeamInfo>
              <TeamName>Armaan Uddin</TeamName>
              <TeamTitle>Game Developer</TeamTitle>
            </TeamInfo>
          </TeamMember>
        </div>
        <div className="team__grid-overlay"></div>
        <a
          className="link team__button link__wrapper"
          target="_blank"
          rel="noopener noreferrer"
          href="https://amio-talio.gitbook.io/paradox-whitepaper/executive-overview/the-team"
        >
          <ButtonBase>See All</ButtonBase>
        </a>
      </div>
    </section>
  );
};

export default Team;

const TeamMember = ({ children, className = "" }) => {
  return <div className={`team__member ${className}`}>{children}</div>;
};

const TeamAvatar = ({ children, className = "" }) => {
  return <div className={`team__avatar ${className}`}>{children}</div>;
};

const TeamInfo = ({ children, className = "" }) => {
  return <div className={`team__info ${className}`}>{children}</div>;
};

const TeamName = ({ children, className = "" }) => {
  return <div className={`team__name ${className}`}>{children}</div>;
};
const TeamTitle = ({ children, className = "" }) => {
  return <div className={`team__title ${className}`}>{children}</div>;
};
