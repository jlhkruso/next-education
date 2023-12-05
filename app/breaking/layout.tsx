import type { Metadata } from "next";

import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Custom layout",
  description: "Custom layout",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <h1>Custom layout</h1>
        <p>But still inherit from default layout</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
