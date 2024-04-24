import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftPanel from "@/Components/LeftPanel/page";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="container flex w-full h-screen overflow-y-hidden">
          <div className="w-1/4">
            <LeftPanel />
          </div>
          <div className="w-3/4 overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
