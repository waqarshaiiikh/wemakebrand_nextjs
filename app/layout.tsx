import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | WeMakeBrands",
  description: "Based in London UK, we specialize in timeless logo design and systematic brand solutions. Helping companies connect with their audiences and scale their business.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}