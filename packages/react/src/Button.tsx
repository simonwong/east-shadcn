import React from 'react'

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="text-pink-300">{props.children}</button>;
}

Button.displayName = "Button";
