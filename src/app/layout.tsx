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
  applicationName: "Latté",
  description: "The best code & coffee in the world.",
  authors: [{ name: "Louis Labeyrie" }, { name: "Louis Labeyrie" }],
  keywords: ["code", "coffee", "latté", "devops", "kubernetes", "freelance"],
  openGraph: {
    title: "Latté",
    description: "The best code & coffee in the world.",
    url: "https://lattecorp.dev",
    siteName: "Latté",
    images: [
      {
        url: "https://img.goodfon.com/original/5824x3264/b/7f/marshmallows-hot-cocoa-coffee-steam-heat.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
