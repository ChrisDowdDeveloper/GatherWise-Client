import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GatherWise",
  description: "Plan smarter with GatherWise — your all-in-one solution for managing events, tracking attendees, and staying organized effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
