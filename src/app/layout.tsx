import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Re:Thread Foundation",
  description: "Nonprofit connecting unused clothing to institutions in need.",
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
