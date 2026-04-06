import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0f0f14]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 p-6 text-sm text-gray-400">

        <div className="text-center md:text-left">
          © {new Date().getFullYear()} SFWONSOFT. Todos los derechos reservados.
        </div>

        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            className="hover:text-purple-400 transition"
          >
            Aviso de Privacidad
          </Link>

          <Link
            href="/about"
            className="hover:text-purple-400 transition"
          >
            Quiénes somos
          </Link>
        </div>

      </div>
    </footer>
  );
}
