import { games } from "@/lib/games"
import { notFound } from "next/navigation"

export default async function GamePage({ params }: {params: Promise<{slug: string}>}) {
  const { slug } = await params

  const game = games.find(g => g.slug === slug)

  if (!game) return notFound()

  return (
    <div className="text-white">
      <section className="relative h-[80vh] w-full items-center max-w-6xl mx-auto px-6 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.coverBanner})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f14] via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white">
            {game.title}
          </h1>

          <p className="mt-4 text-zinc-400">
            {game.description}
          </p>

          <p className="mt-4 text-zinc-400">
            {game.platform.join(" • ")}
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Sobre el juego
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          {game.description}
        </p>
      </section>
    </div>
  )
}
