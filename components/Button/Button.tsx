"use client"

import { Button as ChakraButton, type ButtonProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CustomButtonProps extends ButtonProps {
  /**
   * Optional custom className
   */
  className?: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(({ children, className, ...props }, ref) => {
  return (
    <ChakraButton ref={ref} className={className} {...props}>
      {children}
    </ChakraButton>
  )
})

Button.displayName = "Button"
