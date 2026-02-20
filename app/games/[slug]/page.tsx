import { games } from "@/lib/games"
import { notFound } from "next/navigation"

export default async function GamePage({ params }: {params: Promise<{slug: string}>}) {
  const { slug } = await params

  const game = games.find(g => g.slug === slug)

  if (!game) return notFound()

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white">
        {game.title}
      </h1>

      <p className="mt-4 text-zinc-400">
        {game.description}
      </p>

      <p className="mt-4 text-zinc-400">
        {game.platform.join(" • ")}
      </p>
    </section>
  )
}
