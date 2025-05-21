"use client"

import { Checkbox as ChakraCheckbox, type CheckboxProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CustomCheckboxProps extends CheckboxProps {
  /**
   * Optional custom className
   */
  className?: string
}

/**
 * Checkbox component for selecting options
 */
export const Checkbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(({ children, className, ...props }, ref) => {
  return (
    <ChakraCheckbox ref={ref} className={className} {...props}>
      {children}
    </ChakraCheckbox>
  )
})

Checkbox.displayName = "Checkbox"
