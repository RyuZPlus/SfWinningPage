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
    longDescription:`
      Un shoot’em up 2D centrado en acción dinámica y rutas alternativas.

      Diseñado para ofrecer partidas intensas donde las decisiones y el rendimiento del jugador influyen en el camino a seguir.
      Cada partida puede tomar un rumbo distinto dependiendo del desempeño del jugador, ofreciendo variedad y rejugabilidad.

      Actualmente en fase de prototipo activo. Las mecánicas y características pueden evolucionar durante el desarrollo.
    `,
    genre: "Shoot'em up",
    platforms: [],
    coverImage: "/games/LastNewIcon.png",
    coverBanner: "/AC9Banner.png",
    status: "Próximamente"
  },
  {
    slug: "paper-plane-free-fall",
    title: "Paper Plane: Free Fall",
    description: "Juego móvil arcade",
    longDescription: `Controla un avión de papel descendiendo entre obstáculos dinámicos con sistema de puntuación progresiva.

      Características principales:

      • Jugabilidad sencilla pero desafiante
      • Controles intuitivos
      • Obstáculos dinámicos y entornos cambiantes
      • Gráficos minimalistas y estilo relajante

      ¡Desbloquea logros con Google Play Games!

      Tabla de puntuaciones: ¡compite con tus amigos!`,
    genre: "Arcade",
    platforms: [
      { name: "Android", url: "https://play.google.com/store/apps/details?id=com.SFWONSOFT.PaperPlaneFreeFall" }
    ],
    coverImage: "/games/SecondLastNew.png",
    coverBanner: "/Banner.png",
    status: "Disponible en:",
  },
]
