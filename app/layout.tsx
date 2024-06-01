import type { Metadata } from "next";
import "server-only";
import "./[locales]/globals.css";
import ContextProvider from "./[locales]/components/ContextProvider";

export const metadata: Metadata = {
  title: "SaluberMD",
  description: "Better health, better you",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
		<ContextProvider>
				{children}
		</ContextProvider>
  );
}
