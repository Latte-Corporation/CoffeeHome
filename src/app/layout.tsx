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

const env = process.env.NODE_ENV;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {env === "production" ? (
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="3d6c2e92-e74e-43a0-8078-868e3d2bd6e8"
          ></script>
        ) : null}
      </head>
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
