import { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from "@/src/utils/fpixel";
import { GTM_ID } from "@/src/utils/gtm";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Paradox Metaverse is an NFT Play to Earn game built in Unreal Engine 5 using a blockchain technology."
        />
        <meta name="author" content="Paradox Studios" />

        {/*OG Tags for Google*/}
        <meta name="og:title" property="og:title" content="Paradox Metaverse" />
        <meta
          name="og:description"
          property="og:description"
          content="Paradox Metaverse is an NFT Play to Earn game built in Unreal Engine 5 using a blockchain technology."
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://www.paradoxmeta.io/image/logo-full.png"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://www.paradoxmeta.io"
        />
        <meta
          name="og:site_name"
          property="og:site_name"
          content="Paradox Metaverse"
        />
        <meta name="og:type" property="og:type" content="website" />

        {/*Twitter Tags*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@paradoxmeta" />
        <meta name="twitter:creator" content="@paradoxmeta" />
        <meta name="twitter:title" content="Paradox Metaverse" />
        <meta
          name="twitter:description"
          content="Paradox Metaverse is an NFT Play to Earn game built in Unreal Engine 5 using a blockchain technology."
        />
        <meta
          name="twitter:image"
          content="https://www.paradoxmeta.io/image/logo-full.png"
        />

        {/*Apple Touch Icon*/}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/*preconnect to facebook*/}
        <link
          rel="preconnect"
          href="https://www.facebook.com"
          crossOrigin="true"
        />

        {/*preconnect to google tag manager*/}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="true"
        />

        {/*preconnect to google analytics*/}
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="true"
        />

        {/*Preconnect to Vimeo CDN*/}
        <link
          rel="preconnect"
          href="https://player.vimeo.com"
          crossOrigin="true"
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="facebook pixel"
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
