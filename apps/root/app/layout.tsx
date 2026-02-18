import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@repo/ui/components/nav-bar";
import "./globals.css";
import Providers from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
          <footer className="bg-[#F5F5F7] py-8 text-center text-gray-600 ">
            <p>© 2026 Apple Multi-Zone Demo. All rights reserved.</p>
            <p className="text-sm mt-2">This is the <strong>Home Zone</strong> (Port 3000)</p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
