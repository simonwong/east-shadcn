"use client";

import { Tabs } from "@easy-shadcn/react";
import dynamic from "next/dynamic";
import React, { useRef } from "react";

export interface CodeDemoProps {
  code: string
}

const DynamicReactLiveDemo = dynamic(
  () => import("./react-live-demo").then((m) => m.ReactLiveDemo),
  {
    ssr: false,
    loading: () => <div>Loading</div>,
  },
);

export const CodeDemo: React.FC<CodeDemoProps> = (props) => {
  const ref = useRef(null);
  const { code } = props

  const previewContent = (
    <DynamicReactLiveDemo
      code={code}
      className="rounded-xl p-8 overflow-auto bg-slate-100 shadow-sm"
    />
  )

  return (
    <div ref={ref}>
      <Tabs
        defaultValue="preview"
        option={[
          {
            title: 'Preview',
            key: 'preview',
            content: previewContent
          },
          {
            title: 'Code',
            key: 'code',
            content: (
              <pre className="m-0">
                {code ? code.trim() : ''}
              </pre>
            )
          },
        ]}
      />
    </div>
  );
};
