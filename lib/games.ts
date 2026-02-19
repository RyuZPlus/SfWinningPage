export interface Game {
  slug: string
  title: string
  description: string
  longDescription: string
  genre: string
  platform: string
}

export const games = [
  {
    slug: "asteroid-command-9",
    title: "Asteroid Command 9",
    description: "2D shoot'em up inspirado en Star Fox",
    longDescription:
      "Un shoot’em up 2D con rutas alternativas y progresión dinámica.",
    genre: "Shoot'em up",
    platform: "PC y Android",
  },
  {
    slug: "paper-plane-free-fall",
    title: "Paper Plane: Free Fall",
    description: "Juego móvil arcade",
    longDescription:
      "Controla un avión de papel descendiendo entre obstáculos dinámicos con sistema de puntuación progresiva.",
    genre: "Arcade",
    platform: "Android",
  },
]
