import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us | WeMakeBrands",
  description: "Based in London UK, we specialize in timeless logo design and systematic brand solutions. Helping companies connect with their audiences and scale their business.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}