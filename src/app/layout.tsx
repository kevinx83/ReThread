import "./globals.css";
import { Inter } from "next/font/google";

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
      </head>
      <body className={inter.className}>
        {/* --- TOPBAR --- */}
        <header className="topbar">
          <div className="topbar-inner">
            <span>
              Follow us on{" "}
              <a
                href="https://www.linkedin.com/company/rethread"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
            <a className="btn btn-primary" href="#contact">
              Contact Us!
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
