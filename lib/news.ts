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
    screenshots: [],
  },
  {
    slug: "first-game",
    title: "Primer juego",
    description: "Demuestra qué tan profundo puedes llegar...",
    longDescription:`
      Controla un avión de papel que desciende automáticamente.

      El jugador puede mover el avión hacia la izquierda y la derecha para esquivar obstáculos y buscar rutas seguras.

      A medida que el descenso continúa, la velocidad y la complejidad del patrón de obstáculos aumentan progresivamente, haciendo que el juego se vuelva más difícil y frenético.

      Puntuación

      Se obtiene +1 punto por cada obstáculo atravesado con éxito.

      Cuando el jugador tiene una vida extra activa, cada obstáculo atravesado otorga puntos adicionales, incentivando jugar con cuidado y mantener esa vida extra.

      Dinámica de dificultad

      El desafío aumenta de forma constante: 
      
      • El avión de papel desciende más rápido
      • Los obstáculos se vuelven dinámicos
      • Presentar patrones más complejos conforme el jugador desciende. 
    `,
    coverImage: "/games/SecondLastNew.png",
    screenshots: [
      "/news/Imagen1.jpg",
      "/news/Imagen2.jpg",
      "/news/Imagen3.jpg",
    ],
  },
]