'use client';

import * as React from 'react';

export interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, handleClick }: ButtonProps) => {
  return <button onClick={handleClick}>{children}</button>;
};
