// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = new URL("https://rethreadfoundation.ca");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Re:Thread Foundation",
    template: "%s — Re:Thread Foundation",
  },
  description:
    "Re:Thread Foundation is a nonprofit in Metro Vancouver connecting unused clothing to hospitals, schools, and community organizations in need.",
  keywords: [
    "Re:Thread Foundation",
    "clothing donation Vancouver",
    "nonprofit BC",
    "sustainable fashion",
    "textile reuse",
    "donation bins",
    "community outreach",
    "circular economy",
    "volunteer Vancouver",
  ],
  authors: [{ name: "Re:Thread Foundation" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Re:Thread Foundation",
    title: "Re:Thread Foundation — Giving Clothes a Second Life",
    description:
      "We connect donated clothing with the people who need it most in and around Vancouver, BC.",
    images: [
      {
        url: "/og.png", // Place a 1200x630 image in /public/og.png
        width: 1200,
        height: 630,
        alt: "Re:Thread Foundation logo",
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re:Thread Foundation — Giving Clothes a Second Life",
    description:
      "Connecting unused clothing to people in need across Metro Vancouver.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B8P7FKKQ08"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B8P7FKKQ08');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* --- TOPBAR --- */}
        <header className="topbar">
          <div className="topbar-inner">
            <span>
              Follow us on{" "}
              <a
                href="https://www.linkedin.com/company/re-thread-foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <a className="btn btn-primary" href="/contact">Contact Us!</a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
