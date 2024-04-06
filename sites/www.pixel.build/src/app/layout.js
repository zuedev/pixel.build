import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata = {
  title: "pixel.build",
  description:
    "Hey there, we're pixel.build – your one-stop shop for bringing awesome props to life. Whether you need a quick 3D print or a crazy, custom-made piece that'll blow minds, we're here to turn your ideas into reality, one pixel at a time.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
