import * as React from "react";
import Image from "next/image";
import imageSrc from "../../assets/image/portal.png";
import Head from "next/head";

const Portal = () => {
  return (
    <div className="portal">
      {/*<Head>*/}
      {/*  <link rel="preload" href="/image/portal.png" as="image" />*/}
      {/*</Head>*/}
      <div className="portal__image">
        <Image
          className="portal__image--static"
          loading="eager"
          objectFit="cover"
          objectPosition="0 100%"
          style={{ height: "100%", width: "100%" }}
          //src="/image/portal.png"
          src={imageSrc}
          placeholder="blur"
          alt="portal"
          layout="fill"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Portal;
