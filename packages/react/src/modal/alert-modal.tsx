import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@easy-shadcn/utils";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogTrigger,
  AlertDialogOverlay,
} from "../../components/ui/alert-dialog";
import { Root } from "@radix-ui/react-alert-dialog"
import { Button} from "../button";

export interface AlertModalProps extends React.ComponentProps<typeof Root> {
  trigger?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  cancelText?: ReactNode;
  onCancel?: () => void | Promise<void>;
  cancelProps?: React.ComponentProps<typeof AlertDialogCancel>;
  confirmText?: ReactNode;
  onConfirm?: () => void | Promise<void>;
  confirmProps?: React.ComponentProps<typeof AlertDialogCancel>;
  onClose?: () => void;
  overlayProps?: React.ComponentProps<typeof AlertDialogOverlay>
}

export const AlertModal: React.FC<AlertModalProps> = ({
  title,
  content,
  trigger,
  cancelText = 'Cancel',
  onCancel,
  cancelProps,
  confirmText = 'Confirm',
  onConfirm,
  confirmProps,
  onClose,
  overlayProps,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setOpen(true)
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    onClose?.()
  };

  return (
    <AlertDialog
      onOpenChange={(op) => {
        setOpen(op);
        if (op === false) {
          handleClose();
        }
      }}
      open={open}
      {...props}
    >
      {
        trigger && (
          <AlertDialogTrigger asChild>
            {trigger}
          </AlertDialogTrigger>
        )
      }
      <AlertDialogContent
        overlayProps={overlayProps}
      >
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {content && (
            <AlertDialogDescription>{content}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            variant="outline"
            onClick={async () => {
              await onCancel?.()
              handleClose();
            }}
            className={cn("mt-2 sm:mt-0", cancelProps?.className)}
            {...cancelProps}
          >{cancelText}</Button>
          <Button
            variant="default"
            onClick={async () => {
              await onConfirm?.()
              handleClose();
            }}
            {...confirmProps}
          >{confirmText}</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
