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
        className="font-sfPro antialiased min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
