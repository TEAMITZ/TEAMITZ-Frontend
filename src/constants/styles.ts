/**
 * 스타일 관련 상수
 * Tailwind CSS 클래스와 스타일 값을 상수로 관리합니다.
 */

// 색상 - TEAMITZ Brand Color System
export const COLORS = {
  // Primary - TEAMITZ Blue (#2563EB)
  primary: {
    main: 'bg-primary',
    hover: 'hover:bg-primary-700',
    light: 'bg-primary-400',
    text: 'text-primary',
    border: 'border-primary',
  },
  // Secondary - Innovation Purple (#7C3AED)
  secondary: {
    main: 'bg-secondary',
    hover: 'hover:bg-secondary-500',
    light: 'bg-secondary-500',
    text: 'text-secondary',
    border: 'border-secondary',
  },
  // Accent - Success Green (#22C55E)
  accent: {
    main: 'bg-accent',
    hover: 'hover:bg-accent-400',
    light: 'bg-accent-400',
    text: 'text-accent',
    border: 'border-accent',
  },
  // Success (Accent와 동일)
  success: {
    main: 'bg-accent',
    hover: 'hover:bg-accent-light',
    text: 'text-accent',
    border: 'border-accent',
  },
  // Error/Danger
  error: {
    main: 'bg-red-600',
    hover: 'hover:bg-red-700',
    text: 'text-red-600',
    border: 'border-red-600',
  },
  // Warning
  warning: {
    main: 'bg-yellow-600',
    hover: 'hover:bg-yellow-700',
    text: 'text-yellow-600',
    border: 'border-yellow-600',
  },
  // Background - Dark Theme
  background: {
    main: 'bg-background-main',
    card: 'bg-background-card',
    border: 'bg-background-border',
    default: 'bg-background-main',
    gray: 'bg-background-card',
    dark: 'bg-background-main',
  },
  // Text - Light colors for dark background
  text: {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    disabled: 'text-gray-400',
    white: 'text-text-primary',
  },
} as const

// TEAMITZ Gradient
export const GRADIENTS = {
  teamitz: 'bg-teamitz-gradient',
  teamitzText: 'bg-teamitz-gradient bg-clip-text text-transparent',
} as const

// 텍스트 스타일
export const TEXT_STYLES = {
  // 크기
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  },
  // 굵기
  weight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
  // 정렬
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  },
  // 줄 간격
  leading: {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  },
  // 줄 수 제한
  truncate: 'truncate',
  'line-clamp-2': 'line-clamp-2',
  'line-clamp-3': 'line-clamp-3',
} as const

// 간격 (Spacing)
export const SPACING = {
  // Padding
  padding: {
    xs: 'p-1',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    none: 'p-0',
  },
  // Margin
  margin: {
    xs: 'm-1',
    sm: 'm-2',
    md: 'm-4',
    lg: 'm-6',
    xl: 'm-8',
    none: 'm-0',
  },
  // Gap
  gap: {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    none: 'gap-0',
  },
} as const

// Border
export const BORDER = {
  radius: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
  },
  width: {
    thin: 'border',
    medium: 'border-2',
    thick: 'border-4',
  },
  style: {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
  },
} as const

// Shadow
export const SHADOW = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
} as const

// Transition
export const TRANSITION = {
  none: 'transition-none',
  all: 'transition-all',
  colors: 'transition-colors',
  opacity: 'transition-opacity',
  transform: 'transition-transform',
  duration: {
    fast: 'duration-150',
    normal: 'duration-300',
    slow: 'duration-500',
  },
} as const

// Button Variants - TEAMITZ Brand
export const BUTTON_VARIANTS = {
  primary: `${COLORS.primary.main} ${COLORS.primary.hover} ${COLORS.text.white} font-semibold`,
  secondary: `${COLORS.secondary.main} hover:bg-secondary-light ${COLORS.text.white} font-semibold`,
  accent: `${COLORS.accent.main} ${COLORS.accent.hover} ${COLORS.text.white} font-semibold`,
  gradient: `${GRADIENTS.teamitz} ${COLORS.text.white} font-semibold hover:opacity-90`,
  outline: `border-2 ${COLORS.primary.border} ${COLORS.primary.text} ${COLORS.primary.hover} bg-transparent`,
  ghost: `${COLORS.text.secondary} hover:bg-background-card`,
  danger: `${COLORS.error.main} ${COLORS.error.hover} ${COLORS.text.white}`,
} as const

// Button Sizes
export const BUTTON_SIZES = {
  sm: `${SPACING.padding.sm} ${TEXT_STYLES.size.sm}`,
  md: `${SPACING.padding.md} ${TEXT_STYLES.size.base}`,
  lg: `${SPACING.padding.lg} ${TEXT_STYLES.size.lg}`,
} as const

// Input Styles - TEAMITZ Brand
export const INPUT_STYLES = {
  base: `border border-background-border ${COLORS.background.card} ${BORDER.radius.md} ${SPACING.padding.md} ${TEXT_STYLES.size.base} ${COLORS.text.primary} focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`,
  error: `border-red-500 ${COLORS.background.card} ${BORDER.radius.md} ${SPACING.padding.md} ${TEXT_STYLES.size.base} ${COLORS.text.primary} focus:outline-none focus:ring-2 focus:ring-red-500`,
} as const

// Card Styles - TEAMITZ Brand
export const CARD_STYLES = {
  base: `${COLORS.background.card} border border-background-border ${BORDER.radius.lg} ${SHADOW.md} ${SPACING.padding.lg}`,
  hover: `${COLORS.background.card} border border-background-border ${BORDER.radius.lg} ${SHADOW.md} ${SPACING.padding.lg} ${TRANSITION.all} ${TRANSITION.duration.normal} hover:${SHADOW.lg} hover:border-primary/50`,
  gradient: `${GRADIENTS.teamitz} ${BORDER.radius.lg} ${SHADOW.md} ${SPACING.padding.lg}`,
} as const
