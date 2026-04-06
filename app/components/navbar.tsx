"use client";

import { useState } from "react";
import { games } from "@/lib/games"
import Link from "next/link"

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
              
              {games.map((game) => (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400"
                >
                  {game.title}
                </Link>
              ))}

            </div>
          </div>

          <Link
            href="/news"
            className="px-3 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition"
          >
            Noticias
          </Link>

          <Link
            href="/about"
            className="px-3 py-2 rounded-lg hover:bg-purple-500/10 hover:text-purple-400 transition"
          >
            Quiénes somos
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
                {games.map((game) => (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    onClick={() => {
                      setMenuOpen(false)
                      setGamesOpen(false)
                    }}
                    className="block hover:text-purple-400 transition"
                  >
                    {game.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/news" onClick={() => setMenuOpen(false)} className="block text-lg">
            Noticias
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-lg">
            Quiénes somos
          </Link>

        </div>
      )}
    </header>
  );
}
