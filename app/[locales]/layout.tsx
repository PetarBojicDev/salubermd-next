import type { Metadata } from "next";
import "server-only";
import { Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { StoreProvider } from "@/store/StoreProvider";
import ContextProvider from "./components/ContextProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaluberMD",
  description: "Better health, better you",
};

export default async function RootLayout({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <StoreProvider>
          <ContextProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ContextProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
