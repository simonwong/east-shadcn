"use client"

import { Button as InternalButton } from '../../components/ui/button'
import { AsyncButtonProps, useAsyncButton } from './useAsyncButton';
import React from 'react';

export interface ButtonProps extends AsyncButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const asyncBtnProps = useAsyncButton(props)
    const mergeProps = {
      ...props,
      ...asyncBtnProps
    }
  
    return <InternalButton ref={ref} {...mergeProps} />;
  }
)

Button.displayName = "Button";
