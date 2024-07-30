import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar/navbar";
import { PatientsProvider } from "@/context/PatientsContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Care",
  description: "Coalition Technology front-end challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PatientsProvider>
        <body className={`${inter.className} bg-light`}>
          <Navbar />
          {children}
        </body>
      </PatientsProvider>
    </html>
  );
}
