import "tailwindcss";
import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#0f0f14] text-gray-200">
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
