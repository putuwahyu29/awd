"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Lines from "@/app/components/Lines";
import ScrollToTop from "@/app/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";

export async function generateStaticParams() {
  return [{ lang: "id" }, { lang: "en" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header lang={params.lang} />
          {children}
          <Footer lang={params.lang} />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
