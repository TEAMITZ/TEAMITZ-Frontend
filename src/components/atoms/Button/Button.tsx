import React from 'react'
import { BUTTON_VARIANTS, BUTTON_SIZES, TEXT_STYLES, BORDER, TRANSITION } from '@/constants'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = `${TEXT_STYLES.weight.medium} ${BORDER.radius.lg} ${TRANSITION.colors} focus:outline-none focus:ring-2 focus:ring-offset-2`
  
  const variantStyles = {
    primary: BUTTON_VARIANTS.primary,
    secondary: BUTTON_VARIANTS.secondary,
    outline: BUTTON_VARIANTS.outline,
    ghost: BUTTON_VARIANTS.ghost,
  }
  
  const sizeStyles = {
    sm: BUTTON_SIZES.sm,
    md: BUTTON_SIZES.md,
    lg: BUTTON_SIZES.lg,
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
        (disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button
