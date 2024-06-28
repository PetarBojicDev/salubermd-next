import "server-only";
import { Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  locale: string;
}

const manrope = Manrope({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  locale,
}: LayoutProps) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
