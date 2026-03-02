export interface News {
  slug: string
  title: string
  description: string
  longDescription: string
  coverImage: string
  screenshots: string[]
}

export const news = [
  {
    slug: "comming-soon-ac9",
    title: "Próximamente",
    description: "Enterate del nuevo juego en desarrollo de SFWONSOFT...",
    longDescription:`
      Incluye partidas intensas donde las decisiones y el rendimiento del jugador influyen en el camino a seguir.
      Cada partida puede tomar un rumbo distinto dependiendo del desempeño del jugador, ofreciendo variedad y rejugabilidad.

      Actualmente en fase de prototipo activo. Las mecánicas y características pueden evolucionar durante el desarrollo.
    `,
    coverImage: "/games/LastNewIcon.png",
  },
  {
    slug: "first-game",
    title: "Primer juego",
    description: "Demuestra qué tan profundo puedes llegar...",
    longDescription:`
      Incluye partidas intensas donde las decisiones y el rendimiento del jugador influyen en el camino a seguir.
      Cada partida puede tomar un rumbo distinto dependiendo del desempeño del jugador, ofreciendo variedad y rejugabilidad.

      Actualmente en fase de prototipo activo. Las mecánicas y características pueden evolucionar durante el desarrollo.
    `,
    coverImage: "/games/SecondLastNew.png",
  },
]