"use client";

import {useMDXComponent} from "next-contentlayer2/hooks";
import { CodeDemo, CodeDemoProps } from "./docs/code-demo";

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose">
      <Component
        components={{
          CodeDemo: (props: CodeDemoProps) => <CodeDemo {...props} />
        }}
      />
    </article>
  );
}
