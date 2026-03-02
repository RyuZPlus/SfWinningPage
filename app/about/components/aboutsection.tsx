export default function AboutSection() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto space-y-8 text-gray-300">
      <h2 className="text-3xl font-bold text-white">Sobre mí</h2>

      <p>
        Soy desarrollador independiente especializado en juegos 2D creados con Unity y C#. 
        Construyo soluciones eficientes y experiencias interactivas utilizando principios sólidos de ingeniería de software y
        me enfoco en diseñar sistemas donde la dificultad evoluciona de forma progresiva.
      </p>

      <p>
        Mi objetivo es crear juegos accesibles pero profundos, donde cada mecánica tenga propósito
        y cada partida invite a intentarlo una vez más.
      </p>

      <h2 className="text-3xl font-bold text-white mt-12">Mi Enfoque</h2>

      <ul className="space-y-6">

        <li>
            <h3 className="text-xl font-semibold text-white">
            Ingeniería orientada a la experiencia interactiva
            </h3>
            <p className="text-gray-400">
            Desarrollo sistemas donde la arquitectura del código respalda directamente
            la experiencia del usuario o jugador, priorizando modularidad y claridad.
            </p>
        </li>

        <li>
            <h3 className="text-xl font-semibold text-white">
            Sistemas dinámicos y escalables
            </h3>
            <p className="text-gray-400">
            Implemento comportamientos adaptativos basados en progresión,
            aplicando principios sólidos de programación orientada a objetos.
            </p>
        </li>

        <li>
            <h3 className="text-xl font-semibold text-white">
            Optimización y rendimiento
            </h3>
            <p className="text-gray-400">
            Diseño soluciones eficientes enfocadas en estabilidad y fluidez,
            especialmente en entornos móviles.
            </p>
        </li>

        </ul>

    </section>
  );
}
