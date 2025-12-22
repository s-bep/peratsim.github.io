import React from 'react';
import clsx from 'clsx';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
  mono?: boolean;
}

const headingSizes = {
  1: 'text-4xl sm:text-5xl md:text-6xl',
  2: 'text-3xl sm:text-4xl md:text-5xl',
  3: 'text-2xl sm:text-3xl md:text-4xl',
  4: 'text-xl sm:text-2xl md:text-3xl',
  5: 'text-lg sm:text-xl md:text-2xl',
  6: 'text-base sm:text-lg md:text-xl',
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level = 2,
      as,
      gradient = false,
      mono = false,
      ...props
    },
    ref,
  ) => {
    const Component = (as || `h${level}`) as React.ElementType;

    return (
      <Component
        ref={ref}
        className={clsx(
          'font-bold leading-tight tracking-tight',
          headingSizes[level],
          gradient && 'bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent',
          mono && 'font-mono',
          className,
        )}
        {...props}
      />
    );
  },
);

Heading.displayName = 'Heading';

export default Heading;
