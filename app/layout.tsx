import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const dmSans = DM_Sans({
  weight: ["900", "800", "700", "600", "500", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ifshad's Portfolio",
  description: "Developer portfolio of Ifshad Hasan Sharan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/Images/Circles_Life_RGB_Color_Logo logo.svg"
          type="image/x-icon"
        />
      </head>
      <body className={dmSans.className}>
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] -z-40"></div>
          <div className="">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
