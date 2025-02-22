import Sidebar from "@components/sidebar";
import { Toaster } from "@components/ui/toaster";
import "@styles/global.css";
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  weight: ["700", "400", "300"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Latté",
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
        <Toaster />
      </body>
    </html>
  );
}
