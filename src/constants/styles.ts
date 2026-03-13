/**
 * 스타일 관련 상수
 * Tailwind CSS 클래스와 스타일 값을 상수로 관리합니다.
 */

// 색상
export const COLORS = {
  // Primary
  primary: {
    main: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    text: 'text-blue-600',
    border: 'border-blue-600',
  },
  // Secondary
  secondary: {
    main: 'bg-gray-600',
    hover: 'hover:bg-gray-700',
    text: 'text-gray-600',
    border: 'border-gray-600',
  },
  // Success
  success: {
    main: 'bg-green-600',
    hover: 'hover:bg-green-700',
    text: 'text-green-600',
    border: 'border-green-600',
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
  // Background
  background: {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
  },
  // Text
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    disabled: 'text-gray-400',
    white: 'text-white',
  },
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

// Button Variants
export const BUTTON_VARIANTS = {
  primary: `${COLORS.primary.main} ${COLORS.primary.hover} ${COLORS.text.white}`,
  secondary: `${COLORS.secondary.main} ${COLORS.secondary.hover} ${COLORS.text.white}`,
  outline: `border-2 ${COLORS.primary.border} ${COLORS.primary.text} ${COLORS.primary.hover} bg-transparent`,
  ghost: `${COLORS.text.secondary} hover:bg-gray-100`,
  danger: `${COLORS.error.main} ${COLORS.error.hover} ${COLORS.text.white}`,
} as const

// Button Sizes
export const BUTTON_SIZES = {
  sm: `${SPACING.padding.sm} ${TEXT_STYLES.size.sm}`,
  md: `${SPACING.padding.md} ${TEXT_STYLES.size.base}`,
  lg: `${SPACING.padding.lg} ${TEXT_STYLES.size.lg}`,
} as const

// Input Styles
export const INPUT_STYLES = {
  base: `border ${BORDER.radius.md} ${SPACING.padding.md} ${TEXT_STYLES.size.base} focus:outline-none focus:ring-2 focus:ring-blue-500`,
  error: `border-red-500 ${BORDER.radius.md} ${SPACING.padding.md} ${TEXT_STYLES.size.base} focus:outline-none focus:ring-2 focus:ring-red-500`,
} as const

// Card Styles
export const CARD_STYLES = {
  base: `${COLORS.background.default} ${BORDER.radius.lg} ${SHADOW.md} ${SPACING.padding.lg}`,
  hover: `${COLORS.background.default} ${BORDER.radius.lg} ${SHADOW.md} ${SPACING.padding.lg} ${TRANSITION.all} ${TRANSITION.duration.normal} hover:${SHADOW.lg}`,
} as const
