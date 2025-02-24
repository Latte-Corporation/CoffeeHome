"use client";
import MobilePage from "@components/pages/mobile-page";
import DesktopPage from "../components/pages/desktop-page";

export default function Page() {
  return (
    <>
      <DesktopPage />
      <MobilePage />
    </>
  );
}
