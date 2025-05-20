import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  children,
  className,
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-success-50 text-success-500',
    warning: 'bg-warning-50 text-warning-500',
    error: 'bg-error-50 text-error-500',
  };
  
  return (
    <span
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};