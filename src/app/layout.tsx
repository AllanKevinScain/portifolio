import "./globals.css";

import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";

const inter = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Allan Kevin Scain",
  description: "Dev 10/10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`bg-gray-900 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
