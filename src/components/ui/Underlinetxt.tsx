import React from 'react';
import { Inter } from 'next/font/google';
import classNames from 'classnames';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  return (
    <span
      className={classNames(
        'relative inline-block bg-blue-100 px-1 rounded-lg',
        inter.className
      )}
    >
      <span className="border-b-[3px] border-blue-500 rounded-md pb-0.5 px-1 text-black">
        {text}
      </span>
    </span>
  );
};

export default HighlightedText;
