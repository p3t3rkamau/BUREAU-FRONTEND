import "./globals.css";
import type { Metadata } from "next";
import { poppinsRegularFont } from "fonts";
import Providers from "@/shared/Providers";
import TopHeader from "@/components/main/header/TopHeader";
import MainHeader from "@/components/main/header/MainHeader";
import Footer from "@/components/main/footer/Footer";
import { IChildren } from "types";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegularFont.className} flex flex-col min-h-screen`}
      >
        {/* chackra ui providers and recoil */}
        <Providers>
          <header>
            <TopHeader />
            <MainHeader />
          </header>
          <main className="flex-grow bg-color-bg text-color-text-3 relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
