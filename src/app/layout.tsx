import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";


import "react-loading-skeleton/dist/skeleton.css"
import Silk from "@/components/ui/Silk";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "random",
  description: "a random application",
};
const navItems = [
  { title: "About us", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact us", href: "/contact" }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Silk
            speed={2}
            scale={0.6}
            color="#7B7481"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>
        <Navbar navItems={navItems}/>
        {children}
      </body>
    </html>
  );
}