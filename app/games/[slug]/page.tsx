import { games } from "@/lib/games"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const game = games.find(g => g.slug === slug)

  if (!game) return notFound()

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Steam":
        return "/icons/steam.svg"
      case "Android":
        return "/icons/android.svg"
      default:
        return null
    }
  }

  return (
    <div className="text-white">
      <section className="relative h-[50vh] w-full max-w-6xl mx-auto px-6 py-20">
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

          <p className="mt-4 text-zinc-400 py-6">
            {game.description}
          </p>

          <p className="mt-4 py-6 text-white text-2xl font-extrabold">
            {game.status}
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            {game.platforms.map((platform) => {
              const icon = getPlatformIcon(platform.name)

              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-5
           min-w-[180px]
           px-8 py-5
           border border-white/40
           rounded-xl
           bg-white/5
           backdrop-blur-sm
           font-medium
           text-white
           transition-all duration-300
           hover:bg-purple-600
           hover:border-purple-500
           hover:shadow-purple-500/40
           hover:shadow-xl
           hover:-translate-y-1"
                >

                  {icon && (
                    <img
                      src={icon}
                      alt={platform.name}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  <span className="text-zinc-100 text-sm">
                    {platform.name}
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Sobre el juego
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          {game.longDescription.split(/\r?\n/).map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </section>
    </div>
  )
}
