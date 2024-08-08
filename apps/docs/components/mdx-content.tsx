"use client";

import {useMDXComponent} from "next-contentlayer/hooks";

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose">
      <Component />
    </article>
  );
}
