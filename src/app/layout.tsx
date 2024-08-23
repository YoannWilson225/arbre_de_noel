'use client';
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import Objectifs from "@/components/Objectifs/Objectifs";
import Concepteur from "@/components/Concepteur/Concepteur";
import Contact from "@/components/Contact/Contact";
import CopyRight from "@/components/CopyRight/CopyRight";
import Mouse from "@/components/Mouse/Mouse";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { PaymentDrawer } from "@/components/_components/drawer/PaymentDrawer";
import { dataImage, hashtag_, imgToSVG, scrollSection, stickyNav } from "@/lib/globalFunction";
import { DrawerProvider, useDrawer } from "@/components/_components/drawer/DrawerContext";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode; }) {
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
        <DrawerProvider>
          <script src="vendor/snowfall.js" defer></script>
          <MobileMenu />
          <Header />
          <Home />
          <Objectifs />
          <Concepteur />
          <Contact />
          <CopyRight />
          <Mouse />
          <ProgressBar />
          {/* Déplacez PaymentDrawer ici */}
          <PaymentDrawerWrapper />
        </DrawerProvider>
        <div className="orido_tm_all_wrap" data-magic-cursor="show">
          {children}
        </div>
      </body>
    </html>
  );
}

// Créez un composant séparé pour utiliser useDrawer à l'intérieur du contexte
function PaymentDrawerWrapper() {
  const { open, setOpen } = useDrawer();

  return <PaymentDrawer open={open} setOpen={setOpen} />;
}
