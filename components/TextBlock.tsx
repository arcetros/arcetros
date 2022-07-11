import React from 'react';

interface ITextBlock {
  children: React.ReactNode;
}

const TextBlock = ({ children }: ITextBlock) => (
  <p className="text-secondary mt-4">{children}</p>
);

export default TextBlock;
