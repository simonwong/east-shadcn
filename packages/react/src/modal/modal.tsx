import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { DialogProps } from '@radix-ui/react-dialog'

export interface ModalProps extends DialogProps {
  title?: ReactNode
  titleProps?: ComponentProps<typeof DialogTitle>
  description?: ReactNode
  descriptionProps?: ComponentProps<typeof DialogDescription>
  footer?: ReactNode
  footerProps?: ComponentProps<typeof DialogFooter>
  content?: ReactNode
  contentProps?: ComponentProps<typeof DialogContent>
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  titleProps,
  description,
  descriptionProps,
  footer,
  footerProps,
  content,
  contentProps,
  children,
  ...resetProps
}) => {
  return (
    <Dialog {...resetProps}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent {...contentProps}>
        {
          (title || description) && (
            <DialogHeader>
              {title && (<DialogTitle {...titleProps}>{title}</DialogTitle>)}
              {description && (<DialogDescription {...descriptionProps}>{description}</DialogDescription>)}
            </DialogHeader>
          )
        }
        {content}
        {footer && (<DialogFooter {...footerProps}>{footer}</DialogFooter>)}
      </DialogContent>
    </Dialog>
  )
}
