import "server-only";
import { Manrope } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { StoreProvider } from "@/store/StoreProvider";

const manrope = Manrope({ subsets: ["latin"] });

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
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
