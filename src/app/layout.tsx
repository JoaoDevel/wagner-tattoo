import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";

import { layout } from "@/constants/classes";
import { dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blindreason Tattoo | Luxury Tattoo Studio NYC",
  description:
    "Estudio de tatuajes de lujo en NYC. Arte personalizado, estética cinematográfica y experiencia premium.",
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
