import "tailwindcss";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sfwonsoft - Sitio Oficial",
  description: "Novedades",
  icons: {
    icon: "/Icondevelop.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#0f0f14] text-gray-200 min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1 p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
