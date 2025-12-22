import React from 'react';
import clsx from 'clsx';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variantClasses = {
      primary: 'bg-primary-100 text-primary-700',
      secondary: 'bg-secondary-100 text-secondary-700',
      accent: 'bg-accent-100 text-accent-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      error: 'bg-red-100 text-red-700',
    };

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs font-medium rounded',
      md: 'px-3 py-1 text-sm font-medium rounded-md',
      lg: 'px-4 py-1.5 text-base font-medium rounded-lg',
    };

    return (
      <span
        ref={ref}
        className={clsx('inline-block font-semibold', variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  },
);

Badge.displayName = 'Badge';

export default Badge;
