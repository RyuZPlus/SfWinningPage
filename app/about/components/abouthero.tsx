import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-24 text-center px-6">
       
      <div className="flex justify-center mb-8">
        <Image
          src="/avatar.png"
          alt="Avatar del desarrollador"
          width={160}
          height={160}
          className="rounded-full border-4 border-purple-500"
        />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-purple-400">
        SFWONSOFT
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Desarrollo de videojuegos 2D que combinan creatividad y tecnología
      </p>
    </section>
  );
}
