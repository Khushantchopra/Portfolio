import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Providers from "@/components/Providers";
import "./globals.css";

// General Sans by Indian Type Foundry, from Fontshare (free for commercial use), self-hosted.
const sans = localFont({
  src: [
    { path: "./fonts/GeneralSans-400.woff2", weight: "400" },
    { path: "./fonts/GeneralSans-500.woff2", weight: "500" },
    { path: "./fonts/GeneralSans-600.woff2", weight: "600" },
  ],
  variable: "--font-general",
  display: "swap",
});

const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Khushant Chopra is a freelance full-stack developer building web apps, AI features, online stores and test automation.";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "Khushant Chopra | Web Apps and AI Products, Built End to End",
  description,
  openGraph: {
    title: "Khushant Chopra | Web Apps and AI Products, Built End to End",
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "I build web apps and AI products. Khushant Chopra, freelance full-stack developer." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#f8f5f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
