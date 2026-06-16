import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white cursor-pointer tracking-wide';
  
  const variants = {
    primary: 'bg-brand-teal hover:bg-teal-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:ring-brand-teal',
    secondary: 'bg-brand-orange hover:bg-orange-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:ring-brand-orange',
    outline: 'border border-slate-250 bg-white text-slate-700 hover:bg-slate-50 hover:text-brand-teal hover:border-brand-teal focus:ring-brand-teal',
    dark: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const isDisabled = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${isDisabled} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
