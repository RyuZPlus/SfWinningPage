export default function News() {
    return (
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
    );
}