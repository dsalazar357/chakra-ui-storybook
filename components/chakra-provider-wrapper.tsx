"use client"

import type React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@/lib/theme"

export function ChakraProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
