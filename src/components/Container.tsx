import React from 'react';
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
    };

    return (
      <div
        ref={ref}
        className={clsx('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}
        {...props}
      />
    );
  },
);

Container.displayName = 'Container';

export default Container;
