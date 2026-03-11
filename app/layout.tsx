import type { Metadata } from "next";

import {
  Cormorant_Garamond,
  Source_Sans_3,
  Alex_Brush,
} from "next/font/google";

import "./globals.css";

import { NavigationProvider } from "@/navigation/NavigationProvider";
import { BookToggle } from "@/components/navigation/BookToggle";
import { NavigationOverlay } from "@/components/navigation/NavigationOverlay";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { PageTransitionVeil } from "@/components/layout/PageTransitionVeil";
import { BookingProvider } from "@/contexts/BookingContext";
import { BookingModal } from "@/components/booking/BookingModal";
import Footer from "@/components/layout/Footer";
import { GlobalGridLines } from "@/components/layout/GlobalGridLines";
import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner";

import Script from "next/script";

/* =========================================================
FONTS
========================================================= */

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-brand",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-title",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/* =========================================================
GLOBAL METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://carloscurto.pt"),

  title: {
    default: "Carlos Curto | Orientação espiritual",
    template: "%s | Carlos Curto",
  },

  description:
    "Consultas espirituais privadas e acompanhamento individual com Carlos Curto. Um espaço de escuta profunda, clareza e orientação para momentos importantes da vida.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Carlos Curto",
    url: "https://carloscurto.pt",
    title: "Carlos Curto | Orientação espiritual",
    description:
      "Consultas espirituais privadas e acompanhamento individual. Um espaço de escuta profunda, clareza e orientação para momentos essenciais da vida.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Carlos Curto | Orientação espiritual",
    description:
      "Consultas espirituais privadas e acompanhamento individual com Carlos Curto.",
  },
};

/* =========================================================
ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${alexBrush.variable} ${cormorant.variable} ${sourceSans.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MXM4V3VB');
            `,
          }}
        />

        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="kf8xxjtt9b29t6pxqfnyzdfbdn8pu6"
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXM4V3VB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ScrollToTop />

        <NavigationProvider>
          <BookingProvider>
            <PageTransitionVeil />

            <div id="navigation-layer">
              <BookToggle />
              <NavigationOverlay />
            </div>

            <BookingModal />

            <div id="page-layer" className="relative">
              <GlobalGridLines />

              <div className="relative z-[10]">
                {children}
                <Footer />
              </div>
            </div>
          </BookingProvider>
        </NavigationProvider>

        <CookieConsentBanner />
      </body>
    </html>
  );
}