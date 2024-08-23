"use client";

import { Tabs } from "@easy-shadcn/react";
import React, { PropsWithChildren, useRef } from "react";
import ExampleSet from "@/example";

export interface ExamplePreviewProps {
  name: keyof typeof ExampleSet
}

export const ExamplePreview: React.FC<PropsWithChildren<ExamplePreviewProps>> = ({
  name
}) => {
  const example = ExampleSet[name]

  if (!example) {
    return <div>Not Found Example: {name}</div>
  }

  const Preview = example.component

  return (
    <div>
      <Tabs
        defaultValue="preview"
        option={[
          {
            title: 'Preview',
            value: 'preview',
            content: (
              <div className="rounded-md border p-5 bg-[radial-gradient(#00000020_1px,transparent_1px)] [background-size:16px_16px]">
                {<Preview />}
              </div>
            )
          },
          {
            title: 'Code',
            value: 'code',
            content: (
              <pre className="m-0">
                {example.codeString}
              </pre>
            )
          },
        ]}
      />
    </div>
  );
};
