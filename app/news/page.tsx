import Link from "next/link";
import { news } from "@/lib/news"

export default function News() {
    return (
        <section id="projects" className="mt-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Noticias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((post, index) => (
          <Link
            key={post.slug}
            href={`/news/${post.slug}`}
            className={`${
              index === 0
                ? "md:col-span-2 flex flex-col md:flex-row gap-6 items-center"
                : "md:col-span-1 block"
            } bg-[#18181f] rounded-2xl border border-zinc-800 p-6 hover:border-purple-500 transition`}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className={`rounded-xl object-cover ${
                index === 0
                  ? "w-full md:w-1/2 h-64"
                  : "w-full h-48"
              }`}
            />

            <div>
              <h3 className={`font-bold text-purple-400 ${
                index === 0 ? "text-3xl" : "text-2xl mt-4"
              }`}>
                {post.title}
              </h3>

              <p className={`text-gray-300 ${
                index === 0 ? "mt-3 text-lg" : "mt-2"
              }`}>
                {post.description}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </section>
    );
}