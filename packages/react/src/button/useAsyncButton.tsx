import { ButtonProps } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { MouseEvent, MouseEventHandler, useState } from "react";

export interface AsyncButtonProps extends ButtonProps {
  onClick?: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void | Promise<void>;
}

export const useAsyncButton = ({ disabled, onClick, children }: AsyncButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (onClick) {
      const clickPromise = onClick(e);

      if (clickPromise instanceof Promise) {
        setIsLoading(true);
        try {
          await clickPromise;
        } catch (e) {
          // Empty
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return {
    disabled: isLoading || disabled,
    children: (
      <>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </>
    ),
    onClick: handleClick
  }
}
