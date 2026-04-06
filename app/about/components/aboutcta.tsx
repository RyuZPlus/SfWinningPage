import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Explora nuestros proyectos
      </h2>

      <Link
        href="/games"
        className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition"
      >
        Ver Juegos
      </Link>
    </section>
  );
}
