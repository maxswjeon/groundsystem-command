import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import classnames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ground System @ SPACE Y",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classnames(inter.className, "w-full")}>{children}</body>
    </html>
  );
}
