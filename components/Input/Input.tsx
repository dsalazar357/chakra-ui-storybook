"use client"

import { Input as ChakraInput, type InputProps } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CustomInputProps extends InputProps {
  /**
   * Optional custom className
   */
  className?: string
}

/**
 * Input component for text entry
 */
export const Input = forwardRef<HTMLInputElement, CustomInputProps>(({ className, ...props }, ref) => {
  return <ChakraInput ref={ref} className={className} {...props} />
})

Input.displayName = "Input"
