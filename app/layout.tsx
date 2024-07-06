import type { Metadata } from "next";
import { DM_Sans, Lato, Ubuntu } from "next/font/google";
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
const dmSans = DM_Sans({
  weight: ['900', '800', '700', '600', '500', '400', '300'],
  subsets: ['latin'],
})

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
      <body className={dmSans.className}>
        <div className="relative h-full w-full bg-secondary-color">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="">
            <NextTopLoader />
            {/* <Header /> */}
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
