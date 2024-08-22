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

  const Preview = example.component

  return (
    <div>
      <Tabs
        defaultValue="preview"
        option={[
          {
            title: 'Preview',
            value: 'preview',
            content: <Preview />
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
