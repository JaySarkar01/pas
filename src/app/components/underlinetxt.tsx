import React from 'react';
import classNames from 'classnames';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

interface HighlightedTextProps {
  text: string;
  underlineColor?: 'orange-400' | 'amber-500' | 'yellow-400' | 'red-400'; // extend as needed
}

const colorMap: Record<string, { hover: string; border: string }> = {
  'orange-400': { hover: 'bg-orange-400/20', border: 'border-orange-400' },
  'amber-500': { hover: 'bg-amber-500/20', border: 'border-amber-500' },
  'yellow-400': { hover: 'bg-yellow-400/20', border: 'border-yellow-400' },
  'red-400': { hover: 'bg-red-400/20', border: 'border-red-400' },
};

const HighlightedText: React.FC<HighlightedTextProps> = ({
  text,
  underlineColor = 'orange-400',
}) => {
  const colors = colorMap[underlineColor] || colorMap['orange-400'];

  return (
    <span
      className={classNames(
        'relative inline-block cursor-pointer transition-colors duration-200 px-1 rounded-lg text-black',
        inter.className,
        colors.hover
      )}
    >
      <span className={classNames('border-b-3 pb-0.5 px-1 rounded-sm', colors.border)}>{text}</span>
    </span>
  );
};

export default HighlightedText;
