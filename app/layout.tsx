import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minimal Portfolio | Showcasing Excellence",
  description:
    "A modern, minimalistic portfolio to showcase projects, skills, and creativity with a sleek and elegant design.",
};
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen transition-colors duration-300 dark:bg-[#161616] bg-[#f0f0f0]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="text-foreground ">
            <Navbar />
            <main className="max-w-xl mx-auto p-3 shadow-[rgba(10,_10,_10,_0.06)_0px_1.2px_1.2px_0px,_rgba(10,_10,_10,_0.04)_0px_5px_10px_0px] bg-background dark:bg-[#212121] rounded-lg mb-12">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
