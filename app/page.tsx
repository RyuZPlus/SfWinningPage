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
          Noticias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-[#18181f] rounded-2xl border border-zinc-800 p-6 hover:border-purple-500 transition flex flex-col md:flex-row gap-6 items-center">
            <img 
              src="/games/LastNewIcon.png" 
              alt="LastNew" 
              className="rounded-xl w-full md:w-1/2 h-64 object-cover"
            />

            <div className="md:w-1/1">
              <h3 className="text-3xl font-bold text-purple-400">
                Próximamente
              </h3>
              <p className="text-gray-300 mt-3 text-lg">
                Enterate del nuevo juego en desarrollo de SFWONSOFT...
              </p>
            </div>
          </div>

          <div className="md:col-span-1 bg-[#18181f] rounded-2xl border border-zinc-800 p-6 hover:border-purple-500 transition">
            <img src="/games/SecondLastNew.png" alt="SecondLastNew" className="rounded-xl w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold text-purple-400 mt-4">
              Primer juego
            </h3>
            <p className="text-gray-300 mt-2">
              Demuestra qué tan profundo puedes llegar...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
