import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Sans({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Shifat's Portfolio",
  description: "Portfolio of Md. Shoaib Akhter Shifat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
