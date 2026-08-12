import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina AI - Ultra-Modern AI Movie Recommendation Companion",
  description: "Find your perfect movie using Google Gemini AI, interactive mood chips, and personalized streaming recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full bg-[#09090b] text-zinc-100">{children}</body>
    </html>
  );
}
