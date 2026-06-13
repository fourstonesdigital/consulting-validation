import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Strategy Session — Custom Software for Tutoring Businesses",
  description:
    "I built a custom software platform that runs my tutoring business. Now I'm doing it for a few others. Apply for a free strategy session.",
  openGraph: {
    title: "Your Tutoring Business Should Run Without You in the Room",
    description:
      "Custom software built specifically for tutoring businesses. Apply for a free strategy session.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
