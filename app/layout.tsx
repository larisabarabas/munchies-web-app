import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Munchies App",
  description: "All your restaurant needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sfPro antialiased bg-munchie-white-off mt-14 ml-10"
      >
        {children}
      </body>
    </html>
  );
}
