import { news } from "@/lib/news"
import { notFound } from "next/navigation"
import Image from "next/image"

export function generateStaticParams() {
  return news.map((new_) => ({
    slug: new_.slug,
  }));
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const new_ = news.find(g => g.slug === slug)
  if (!new_) return notFound()

  return (
    <div className="text-white">
      <section className="relative min-h-[80vh] w-full items-center max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white text-center">
          {new_.title}
        </h1>

        <div className="flex justify-center mb-12">
          <Image
            src={new_.coverImage}
            alt={new_.title}
            width={320}
            height={240}
            className="rounded-2xl object-cover max-w-5xl md:max-w-6xl"
          />
        </div>

        <p className="text-zinc-400 leading-relaxed">
          {new_.longDescription.split(/\r?\n/).map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {new_.screenshots.map((shot, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl"
            >
              <Image
                src={shot}
                alt={`Screenshot ${index + 1}`}
                width={1200}
                height={700}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}