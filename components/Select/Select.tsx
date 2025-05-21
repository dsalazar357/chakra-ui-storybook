"use client"

import { Select as ChakraSelect, type SelectProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CustomSelectProps extends SelectProps {
  /**
   * Optional custom className
   */
  className?: string
}

/**
 * Select component for choosing from options
 */
export const Select = forwardRef<HTMLSelectElement, CustomSelectProps>(({ children, className, ...props }, ref) => {
  return (
    <ChakraSelect ref={ref} className={className} {...props}>
      {children}
    </ChakraSelect>
  )
})

Select.displayName = "Select"
