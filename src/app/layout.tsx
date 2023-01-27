"use client";
import Header from "@/components/Header/Header";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar";
import IsMobile from "@/customHooks/isMobileHook/IsMobile";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobile, isTablet } = IsMobile();

  console.log({ isTablet });
  return (
    <html lang="en">
      <head />
      <body>
        <Header>
          {isMobile || isTablet ? <MobileNavbar /> : <DesktopNavbar />}
        </Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
