import { Inter, Space_Grotesk } from "next/font/google";
import { portfolioContent } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata = {
  title: portfolioContent.metadata.title,
  description: portfolioContent.metadata.description,
  openGraph: {
    title: portfolioContent.metadata.title,
    description: portfolioContent.metadata.description,
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
