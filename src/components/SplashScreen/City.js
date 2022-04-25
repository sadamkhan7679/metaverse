import * as React from "react";
import Image from "next/image";
import imageSrc from "../../assets/image/city.png";
import Head from "next/head";

const City = () => {
  return (
    <div className="city splash-screen-city">
      {/*<Head>*/}
      {/*  <link rel="preload" href="/image/city.png" as="image" />*/}
      {/*</Head>*/}
      <Image
        className="city__image"
        loading="eager"
        objectFit="contain"
        src={imageSrc}
        placeholder="blur"
        //src="/image/city.png"
        layout="fill"
        alt="city"
        priority={true}
      />
    </div>
  );
};

export default City;
