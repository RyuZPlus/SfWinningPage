export default function AboutStack() {
  return (
    <section className="py-16 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          Áreas de experiencia
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
          <div>Desarrollo de videojuegos en Unity</div>
          <div>Diseño de mecánicas de juego</div>
          <div>Diseño de sprites</div>
          <div>Optimización para dispositivos móviles</div>
          <div>Publicación en Google Play</div>
        </div>
      </div>
    </section>
  );
}
