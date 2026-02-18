"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-[#0f0f14]/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-purple-500 text-lg">
          <Link href="/">
            SFWONSOFT
          </Link>
        </h1>

        <div className="hidden md:flex gap-2 text-sm items-center">

          <Link
            href="/"
            className="px-3 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition"
          >
            Inicio
          </Link>

          <div className="relative group">
            <button className="px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-purple-500/10 hover:text-purple-400 transition">
              Juegos
              <span className="transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </button>

            <div className="absolute left-0 w-52 rounded-xl bg-[#1a1a22] border border-zinc-800 shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
              <Link href="/games/shooter" className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400">
                Shooter 2D
              </Link>
              <Link href="/games/adventure" className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400">
                Action Adventure
              </Link>
              <Link href="/games/legacy" className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400">
                Proyectos Legacy
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            className="px-3 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition"
          >
            Noticias
          </Link>

          <Link
            href="/about"
            className="px-3 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition"
          >
            Sobre mí
          </Link>

        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#111118] border-t border-zinc-800 px-6 py-6 space-y-4">

          <Link href="/" onClick={() => setMenuOpen(false)} className="block text-lg">
            Inicio
          </Link>

          <div>
            <button
              onClick={() => setGamesOpen(!gamesOpen)}
              className="flex justify-between w-full text-lg"
            >
              Juegos
              <span>{gamesOpen ? "−" : "+"}</span>
            </button>

            {gamesOpen && (
              <div className="mt-3 ml-4 space-y-2 text-gray-400">
                <Link href="/games/shooter" onClick={() => setMenuOpen(false)} className="block">
                  Shooter 2D
                </Link>
                <Link href="/games/adventure" onClick={() => setMenuOpen(false)} className="block">
                  Action Adventure
                </Link>
                <Link href="/games/legacy" onClick={() => setMenuOpen(false)} className="block">
                  Proyectos Legacy
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block text-lg">
            Noticias
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-lg">
            Sobre mí
          </Link>

        </div>
      )}
    </header>
  );
}
