"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Lines from "@/app/components/Lines";
import ScrollToTop from "@/app/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
