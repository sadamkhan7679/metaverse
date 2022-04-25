import * as React from "react";
import Image from "next/image";
import imageSrc from "../../assets/image/logo-full.png";
import Head from "next/head";

const Logo = () => {
  return (
    <div className="logo splash-screen-logo">
      {/*<Head>*/}
      {/*  <link rel="preload" href="/image/logo-full.png" as="image" />*/}
      {/*</Head>*/}
      <Image
        className="logo__image"
        objectFit="contain"
        //src="/image/logo-full.png"
        src={imageSrc}
        placeholder="blur"
        alt="logo-full"
        layout="fill"
        loading="eager"
        priority={true}
        quality={100}
      />
    </div>
  );
};

export default Logo;
