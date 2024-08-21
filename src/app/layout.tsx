'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Objectifs from "@/components/Objectifs/Objectifs";
import Contact from "@/components/Contact/Contact";
import CopyRight from "@/components/CopyRight/CopyRight";
import Mouse from "@/components/Mouse/Mouse";
import React from "react";
import { dataImage, hashtag_, imgToSVG, scrollSection, stickyNav } from "@/lib/globalFunction";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  React.useEffect(() => {
    imgToSVG();
    dataImage();
    hashtag_();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <script src="vendor/snowfall.js" defer></script>
        <MobileMenu />
        <Header />
        <Home />
        <Objectifs />
        {/* <Concepteur /> */}
        {/* <ExpertAreas /> */}
        <Contact />
        <CopyRight />
        <Mouse />
        <ProgressBar />
        <div className="orido_tm_all_wrap" data-magic-cursor="show">
          {children}
        </div>
      </body>
    </html>
  );
}
