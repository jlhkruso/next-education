import type { Metadata } from "next";
// style
import "@/styles/main.scss";
import gridStyle from "@/styles/base/grid.module.scss";
// components
import Header from "@/app/ui/layout/header/header";

// store
import { Providers } from "@/app/redux/provider";

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
      <body suppressHydrationWarning={true}>
        <div className={gridStyle.wrap}>
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
