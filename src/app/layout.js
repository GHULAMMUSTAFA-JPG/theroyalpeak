import { League_Spartan } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "../app/assets/scss/style.scss";
import "../app/assets/css/materialdesignicons.min.css";
import "./globals.css";

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league",
});

export const metadata = {
  title: "The Royal Peak Realty - Premium Real Estate Agency in Dubai",
  description: "The Royal Peak Realty - Premium Real Estate Agency in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_io/favicon-32x32.png"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={league.variable}>{children}</body>
    </html>
  );
}
