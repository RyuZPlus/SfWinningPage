export default function Home() {
  return (
    <>
      <section className="relative w-full py-28 md:py-40 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{
            backgroundImage: "url('/Banner.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-start justify-center text-left px-6">

          <h1 className="text-6xl md:text-8xl font-extrabold text-purple-400 drop-shadow-lg">
            PAPER PLANE: FREE FALL
          </h1>

          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            ¡Pon a prueba tus reflejos con esta aventura aérea!
          </p>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-4xl">
            Controla un avión de papel que desciende automáticamente por un mundo lleno de obstáculos. Muevete y adentrate entre los espacios para superar los peligros, y demuestra qué tan profundo puedes llegar sin chocar.
          </p>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            🌀 Características principales:
          </p>
          <ul className="mt-6 list-disc pl-6 text-lg text-gray-300 space-y-2 marker:text-purple-500 marker:text-xl">
            <li>Jugabilidad sencilla pero desafiante</li>
            <li>Controles intuitivos</li> 
            <li>Obstáculos dinámicos y entornos cambiantes</li>
            <li>Gráficos minimalistas y estilo relajante</li>
            <li>Tabla de puntuaciones: ¡compite con tus amigos!</li>
          </ul>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            ¿Qué tan lejos puedes llegar antes de estrellarte?
            🌟 ¡Descúbrelo y domina el arte del vuelo en caída libre!
          </p>
        </div>
      </section>

      <section id="projects" className="mt-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#18181f] rounded-2xl border border-zinc-800 p-6 hover:border-purple-500 transition">
            <img src="/games/shooter.png" alt="Shooter 2D" className="rounded-xl" />
            <h3 className="text-2xl font-bold text-purple-400 mt-4">
              Shooter 2D
            </h3>
            <p className="text-gray-300 mt-2">
              Un shooter clásico con mecánicas modernas.
            </p>
          </div>

          <div className="bg-[#18181f] rounded-2xl border border-zinc-800 p-6 hover:border-purple-500 transition">
            <img src="/games/adventure.png" alt="Adventure" className="rounded-xl" />
            <h3 className="text-2xl font-bold text-purple-400 mt-4">
              Aventura Action
            </h3>
            <p className="text-gray-300 mt-2">
              Explora mundos llenos de desafíos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
