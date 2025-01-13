import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Nabar/page";
import Footer from "./Footer/page";
import Engage from "./Audience-Engage/page";
import {Raleway} from 'next/font/google'


const RalewayFont = Raleway({
  
  variable: "--font-raleway",
  subsets: ['latin'],
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flara",
  description: "A blogging website where you can find all kinds of technology, travel and sports blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
            <main className={RalewayFont.variable}>{children}</main>
            <Engage/>
          <Footer />
      </body>
    </html>
  );
}
