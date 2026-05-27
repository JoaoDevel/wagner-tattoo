import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";

import { layout } from "@/constants/classes";
import { dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wagner Tattoo",
    template: "%s | Wagner Tattoo",
  },
  description:
    "Estudio de tatuajes premium. Arte personalizado, estética cinematográfica y experiencia de alto nivel.",
  applicationName: "Wagner Tattoo",
  keywords: [
    "Wagner Tattoo",
    "tattoo studio",
    "custom tattoos",
    "blackwork",
    "fine line",
    "tattoos",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Wagner Tattoo",
    title: "Wagner Tattoo",
    description:
      "Estudio de tatuajes premium. Arte personalizado, estética cinematográfica y experiencia de alto nivel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagner Tattoo",
    description:
      "Estudio de tatuajes premium. Arte personalizado, estética cinematográfica y experiencia de alto nivel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${dmSans.className} ${layout.page} min-h-full antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
