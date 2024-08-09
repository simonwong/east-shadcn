import React from "react";
import {LivePreview, LiveProvider, LiveError} from "react-live";
import * as components from "@easy-shadcn/react";
import { cn } from "@easy-shadcn/utils";

export interface ReactLiveDemoProps {
  code: string;
  noInline?: boolean;
  height?: string | number;
  isCentered?: boolean;
  className?: string;
}

export const scope = {
  ...components,
} as Record<string, unknown>;

export const ReactLiveDemo: React.FC<ReactLiveDemoProps> = ({
  code,
  isCentered = false,
  height,
  className,
}) => {
  const content = (
    <>
      <LivePreview
        className={cn("live-preview flex h-full w-full not-prose", {
          "justify-center items-center": isCentered,
        })}
        style={{height}}
      />
      <LiveError />
    </>
  );

  return (
    <LiveProvider code={code} noInline scope={scope}>
      <div className={cn(className)}>
        {content}
      </div>
    </LiveProvider>
  );
};
