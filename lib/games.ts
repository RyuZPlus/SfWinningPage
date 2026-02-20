export interface Game {
  slug: string
  title: string
  description: string
  longDescription: string
  genre: string
  platform: string[]
  coverImage: string
  screenshots: string[]
  features: string[]
}

export const games = [
  {
    slug: "asteroid-command-9",
    title: "Asteroid Command 9",
    description: "2D shoot'em up en desarrollo",
    longDescription:
      "Un shoot’em up 2D con rutas alternativas y progresión dinámica.",
    genre: "Shoot'em up",
    platform: ["Android", "Steam"],
    cover: "/games/LastNewIcon.png",
  },
  {
    slug: "paper-plane-free-fall",
    title: "Paper Plane: Free Fall",
    description: "Juego móvil arcade",
    longDescription:
      "Controla un avión de papel descendiendo entre obstáculos dinámicos con sistema de puntuación progresiva.",
    genre: "Arcade",
    platform: ["Android"],
    cover: "/games/SecondLastNew.png",
  },
]
