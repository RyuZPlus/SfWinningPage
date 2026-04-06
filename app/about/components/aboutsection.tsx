export default function AboutSection() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 text-gray-300">
      <h2 className="text-3xl font-bold text-white">Quiénes somos</h2>

      <p>
        En SFWONSOFT desarrollamos videojuegos combinando programación y diseño interactivo, 
        explorando nuevas mecánicas y experiencias centradas en el jugador, con especial atención al rendimiento y la escalabilidad.
      </p>

      <p>
        El proyecto es liderado por un desarrollador full-stack para entornos profesionales, 
        y desarrollo de videojuegos como área de exploración técnica y creativa.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12">Nuestro enfoque</h2>

      <ul className="space-y-6">

        <li>
            <h3 className="text-xl font-semibold text-white">
            Ingeniería orientada a la experiencia interactiva
            </h3>
            <p className="text-gray-400">
            Se centra en crear sistemas eficientes, escalables y experiencias interactivas de calidad,
            combinando tecnologías modernas con buenas prácticas de desarrollo.
            </p>
        </li>

        <li>
            <h3 className="text-xl font-semibold text-white">
            Sistemas dinámicos y escalables
            </h3>
            <p className="text-gray-400">
            Implemento comportamientos adaptativos basados en progresión,
            aplicando principios sólidos de programación orientada a objetos.
            Además, compartimos conocimiento a través de artículos y contenido técnico orientado a desarrolladores.
            </p>
        </li>

        <li>
            <h3 className="text-xl font-semibold text-white">
            Optimización y rendimiento
            </h3>
            <p className="text-gray-400">
            Diseñamos soluciones eficientes enfocadas en estabilidad y fluidez,
            especialmente en entornos móviles.
            </p>
        </li>

        </ul>

    </section>
  );
}
