import Sidebar from "@components/sidebar";
import "@styles/global.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  weight: "700",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Coffee Home",
  description: "The best code & coffee in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.className} flex flex-row h-screen w-screen`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
