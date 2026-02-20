import Link from "next/link"
import { games } from "@/lib/games"

export default function Games() {
    return (
        <section id="projects" className="mt-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Juegos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
            <Link
                key={game.slug}
                href={`/games/${game.slug}`}
                className="md:col-span-1 bg-[#18181f] rounded-2xl border border-zinc-800 p-6 hover:border-purple-500 transition block"
            >
                <img
                src={game.cover}
                alt={game.title}
                className="rounded-xl w-full h-48 object-cover"
                />

                <h3 className="text-2xl font-bold text-purple-400 mt-4">
                {game.title}
                </h3>

                <p className="text-gray-300 mt-2">
                {game.description}
                </p>
            </Link>
            ))}
        </div>
      </section>
    );
}