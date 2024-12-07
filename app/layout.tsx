import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Sadaf Shahab",
  description: "I build my Portfolio with Next js and customm css. Watch My Portfolio that includes my interesting projects and my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Footer />
      </body>
    </html>
  );
}
