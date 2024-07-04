import type { Metadata } from "next";
import {  Lato, Ubuntu } from "next/font/google";
import "./globals.css";
import LeftPanel from "@/components/LeftPanel/page";

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], display: "swap", subsets: ['latin']});
const lato = Lato({weight: ['100', '300', '400', '700', '900'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "Ifshad-Dev",
  description: "Developer portfolio of Ifshad Hasan Sharan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="container flex w-full h-screen overflow-y-hidden">
          <div className="md:w-1/4 hidden md:flex">
            <LeftPanel />
          </div>
          <div className="md:w-3/4 overflow-y-scroll">{children}</div>
        </div>
      </body>
    </html>
  );
}
