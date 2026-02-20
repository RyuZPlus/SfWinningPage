export interface Platform {
  name: string
  url: string
}

export interface Game {
  slug: string
  title: string
  description: string
  longDescription: string
  genre: string
  platform: Platform[]
  coverImage: string
  coverBanner: string
  screenshots: string[]
  features: string[]
  status: string
}

export const games = [
  {
    slug: "asteroid-command-9",
    title: "Asteroid Command 9",
    description: "2D shoot'em up en desarrollo",
    longDescription:
      "Un shoot’em up 2D con rutas alternativas y progresión dinámica.",
    genre: "Shoot'em up",
    platforms: [],
    coverImage: "/games/LastNewIcon.png",
    coverBanner: "/AC9Banner.png",
    status: "Próximamente en:"
  },
  {
    slug: "paper-plane-free-fall",
    title: "Paper Plane: Free Fall",
    description: "Juego móvil arcade",
    longDescription:
      "Controla un avión de papel descendiendo entre obstáculos dinámicos con sistema de puntuación progresiva.",
    genre: "Arcade",
    platforms: [
      { name: "Android", url: "https://play.google.com/store/apps/details?id=com.SFWONSOFT.PaperPlaneFreeFall" }
    ],
    coverImage: "/games/SecondLastNew.png",
    coverBanner: "/Banner.png",
    status: "Disponible en:",
  },
]
