import type { Metadata } from "next";
import { Lato, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import NextTopLoader from "nextjs-toploader";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});
const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

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
        <div className="">
          <NextTopLoader />
          {/* <Header /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
