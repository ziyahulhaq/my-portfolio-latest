import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ziyavul Haq — Software Developer",
  description: "I enjoy solving complex problems and turning logical ideas into simple, working solutions.",
  openGraph: {
    title: "Ziyavul Haq — Software Developer",
    description: "I enjoy solving complex problems and turning logical ideas into simple, working solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyavul Haq — Software Developer",
    description: "I enjoy solving complex problems and turning logical ideas into simple, working solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
