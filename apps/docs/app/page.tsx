import { allDocs } from 'contentlayer/generated'
import { useMDXComponent } from "next-contentlayer/hooks";

export default function Home() {
  const code = allDocs[0].body.code
  const MDXContent = useMDXComponent(code)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose">
        <MDXContent />
      </article>
    </main>
  );
}
