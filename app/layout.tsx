import "tailwindcss";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#0f0f14] text-gray-200">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
