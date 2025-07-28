import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'search';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon: Icon,
  iconPosition = 'left',
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-light focus:border-navy-light transition-colors duration-200';
  
  const variantClasses = {
    primary: 'px-4 py-3',
    search: 'pl-10 pr-4 py-3'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${error ? 'border-error focus:ring-error focus:border-error' : ''} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        )}
        
        <input
          className={classes}
          {...props}
        />
        
        {Icon && iconPosition === 'right' && (
          <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;