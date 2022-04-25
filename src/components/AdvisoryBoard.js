import React from "react";
import { Headline, StrobeText } from "./SplashScreen/Text";
import Image from "next/image";

const Team = () => {
  return (
    <section className="team">
      <header className="section__header">
        <Headline className="advisory__headline">Strategic</Headline>
        <StrobeText>Advisory Board</StrobeText>
      </header>

      <div className="team__grid">
        <TeamMember>
          <TeamAvatar>
            <Image
              style={{ borderRadius: "100%" }}
              //imgStyle={{ borderRadius: "100%" }}
              className="team__member-image"
              src="/image/team/avatar-placeholder.jpg"
              alt="avatar placeholder"
              width={243}
              height={243}
              //layout="fill"
            />
          </TeamAvatar>
          <TeamInfo>
            <TeamName className="advisory__to-be">To be announced</TeamName>
          </TeamInfo>
        </TeamMember>

        <TeamMember>
          <TeamAvatar>
            <Image
              style={{ borderRadius: "100%" }}
              //imgStyle={{ borderRadius: "100%" }}
              className="team__member-image"
              src="/image/team/shaq.jpg"
              alt="shaq"
              width={243}
              height={243}
              //layout="fill"
            />
          </TeamAvatar>
          <TeamInfo>
            <a
              className="link link__wrapper advisory__link"
              href="https://www.linkedin.com/in/analystshaq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeamName>Shahraq Hussain</TeamName>
              <TeamTitle className="to-be-link">LinkedIn</TeamTitle>
            </a>
          </TeamInfo>
        </TeamMember>

        <TeamMember>
          <TeamAvatar>
            <Image
              style={{ borderRadius: "100%" }}
              //imgStyle={{ borderRadius: "100%" }}
              className="team__member-image"
              src="/image/team/avatar-placeholder.jpg"
              alt="avatar"
              width={243}
              height={243}
              //layout="fill"
            />
          </TeamAvatar>
          <TeamInfo>
            <TeamName className="advisory__to-be">To be announced</TeamName>
          </TeamInfo>
        </TeamMember>
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
