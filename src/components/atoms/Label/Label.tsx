import React from 'react'
import { cn } from '@/utils'
import { TEXT_STYLES } from '@/constants'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  return (
    <label
      className={cn(`${TEXT_STYLES.size.sm} ${TEXT_STYLES.weight.medium}`, className)}
      {...props}
    />
  )
}

export default Label
