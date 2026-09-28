import type { Metadata } from "next";
import { Anton, Manrope, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const anton = Anton({
  variable: "--font-poster",
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexgarciacoach.com"),
  title: "Alex García · Coach Online — Culturismo Natural & Muay Thai",
  description:
    "Asesorías online 1:1 con Alex García. Programa de entrenamiento personalizado en culturismo natural y Muay Thai, adaptado a tu objetivo, tu nivel y tu disponibilidad.",
  openGraph: {
    title: "Alex García · Coach Online",
    description:
      "Transforma tu cuerpo y tu rendimiento con un programa de entrenamiento personalizado hecho para ti.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${anton.variable}`}>
        <SmoothScroll />
        {children}
        <div className="grain" aria-hidden />

      </body>
    </html>
  );
}
