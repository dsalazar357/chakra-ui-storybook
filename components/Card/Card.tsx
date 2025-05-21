"use client"

import { Box, type BoxProps, useStyleConfig } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface CardProps extends BoxProps {
  /**
   * Card variant
   */
  variant?: "elevated" | "outline" | "filled" | "unstyled"
  /**
   * Optional custom className
   */
  className?: string
}

/**
 * Card component for containing related content
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "elevated", className, children, ...props }, ref) => {
    const styles = useStyleConfig("Card", { variant })

    return (
      <Box ref={ref} __css={styles} className={className} {...props}>
        {children}
      </Box>
    )
  },
)

Card.displayName = "Card"
