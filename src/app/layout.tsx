import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./components/LangContext";

export const metadata: Metadata = {
  title: "Bay Designer Studio — Website Design & AI Website Management",
  description:
    "Bay Designer Studio builds beautiful websites and pairs you with an AI Website Manager on Telegram. Based on Bay Street, Toronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
