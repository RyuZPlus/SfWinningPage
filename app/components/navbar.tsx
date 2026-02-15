"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto flex justify-between p-4 items-center">
        <h1 className="font-bold text-purple-500">
          SFWONSOFT
        </h1>

        <div className="flex gap-6 text-sm items-center">

          <Link href="/" className="hover:text-purple-400 transition">
            Inicio
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-purple-400 transition"
            >
              Juegos
              <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {open && (
              <div className="absolute left-0 mt-3 w-52 rounded-xl bg-[#1a1a22] border border-zinc-800 shadow-xl">
                <Link
                  href="/games/shooter"
                  className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Shooter 2D
                </Link>

                <Link
                  href="/games/adventure"
                  className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Action Adventure
                </Link>

                <Link
                  href="/games/legacy"
                  className="block px-4 py-2 hover:bg-purple-500/10 hover:text-purple-400 transition"
                  onClick={() => setOpen(false)}
                >
                  Proyectos Legacy
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-purple-400 transition">
            Noticias
          </Link>

          <Link href="/about" className="hover:text-purple-400 transition">
            Sobre mí
          </Link>

        </div>
      </nav>
    </header>
  );
}
