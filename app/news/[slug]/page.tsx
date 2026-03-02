import { news } from "@/lib/news"
import { notFound } from "next/navigation"

export default async function NewsPage({ params }: {params: Promise<{slug: string}>}) {
  const { slug } = await params
  const new_ = news.find(g => g.slug === slug)
  if (!new_) return notFound()

  return (
    <div className="text-white">
      <section className="relative h-[80vh] w-full items-center max-w-6xl mx-auto px-6 py-20">
        <h1>Noticia: {slug}</h1>
      </section>
    </div>
  )
}