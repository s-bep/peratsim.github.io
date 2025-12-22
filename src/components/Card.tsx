import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  elevated?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, elevated = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-xl border border-neutral-200 bg-white p-6 sm:p-8',
          hover && 'transition-all duration-300 hover:shadow-lg hover:border-primary-200 cursor-pointer',
          elevated && 'shadow-lg',
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';

export default Card;
