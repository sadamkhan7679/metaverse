import * as React from "react";
import Image from "next/image";
import imageSrc from "../../assets/image/ape.png";
import Head from "next/head";

const Ape = () => {
  return (
    <div className="ape splash-screen-ape">
      {/*<Head>*/}
      {/*  <link rel="preload" href="/image/ape.png" as="image" />*/}
      {/*</Head>*/}
      <Image
        className="ape__image"
        //src="/image/ape.png"
        src={imageSrc}
        placeholder="blur"
        loading="eager"
        style={{
          height: "clamp(670px, 120vw, 960px)",
          width: "100vw",
          minWidth: "960px",
          maxHeight: "70vh",
          marginTop: "auto",
        }}
        layout="fill"
        objectFit="contain"
        objectPosition="0 100%"
        alt="ape"
        priority={true}
      />
    </div>
  );
};

export default Ape;
