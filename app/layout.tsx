import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Header from "@/app/ui/layout/header/header";

export const metadata: Metadata = {
  title: "Learning next",
  description: "ZzzZZz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
