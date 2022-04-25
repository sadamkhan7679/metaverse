import "../styles/globals.css";
// styles
import "@/src/assets/styles/core/normalize.css";
import "@/src/assets/styles/app.scss";
import { AppProvider } from "@/src/context/AppContext";
import { useEffect, Fragment } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as fbq from "@/src/utils/fpixel";
import { GTM_ID, pageview } from "@/src/utils/gtm";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview(); // facebook pixel

    pageview(); // Google Analytics

    const handleRouteChange = () => {
      fbq.pageview(); // facebook pixel
      pageview(); // Google Analytics
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Fragment>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        strategy="afterInteractive"
        id="facebook-jssdk"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />

      {/* Google Tag Manager - Global base code */}
      <Script
        strategy="afterInteractive"
        id="gtm-base"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </Fragment>
  );
}

export default MyApp;
