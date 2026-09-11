import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const description =
  "Software Engineer focused on backend systems, architecture, and production-ready applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} — Software Engineer`,
    template: `%s — ${site.name}`,
  },
  description,
  authors: [{ name: site.name, url: site.siteUrl }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${site.name} — Software Engineer`,
    description,
    url: site.siteUrl,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Engineer`,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.siteUrl,
  sameAs: site.socials.map((social) => social.href),
  knowsAbout: skillGroups.flatMap((group) => group.items),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans`}
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(29,69,51,0.28),transparent)]"
        />
        <Nav />
        <main className="relative mx-auto max-w-[1180px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
