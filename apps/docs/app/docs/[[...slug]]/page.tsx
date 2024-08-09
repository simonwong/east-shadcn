import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"
import type { Metadata } from "next"
import { absoluteUrl } from "@/utils"
import { MDXContent } from "@/components/mdx-content"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: 'https://ui.shadcn.com/og.jpg', // use shadcn ui og image
          width: 1200,
          height: 630,
          alt: 'easy shadcn',
        },
      ],
    },
  }
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const doc = await getDocFromParams({ params })

  if (doc == null) {
    notFound()
  } 

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">      
      <MDXContent code={doc.body.code} />
    </main>
  )
}