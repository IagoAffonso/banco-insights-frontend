import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'metric' | 'metric-large';
  hover?: boolean;
  padding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = true
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-200';
  
  const variantClasses = {
    default: hover ? 'hover:shadow-md transition-shadow duration-200' : '',
    metric: 'hover:shadow-md transition-all duration-200 hover:border-navy-light',
    'metric-large': 'hover:shadow-lg transition-all duration-200 hover:border-navy-light'
  };

  const paddingClasses = {
    default: padding ? 'p-6' : '',
    metric: padding ? 'p-6' : '',
    'metric-large': padding ? 'p-8' : ''
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;