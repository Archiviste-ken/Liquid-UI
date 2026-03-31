import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liquid UI",
  description:
    "Production-ready glassmorphism and neomorphism component library with interactive docs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="liquid-grid min-h-full bg-liquid-page text-liquid-ink selection:bg-liquid-accent/20 selection:text-liquid-ink">
        {children}
      </body>
    </html>
  );
}
