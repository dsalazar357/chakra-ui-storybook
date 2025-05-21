import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#e6f6f5",
      100: "#c3e8e5",
      200: "#9fd9d5",
      300: "#7bcbc5",
      400: "#57bcb5",
      500: "#3daca5",
      600: "#318a84",
      700: "#256863",
      800: "#184642",
      900: "#0a2321",
    },
  },
  components: {
    Button: {
      // Custom button styles
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "md",
      },
    },
    Card: {
      baseStyle: {
        display: "flex",
        flexDirection: "column",
        background: "white",
        borderRadius: "lg",
      },
      variants: {
        elevated: {
          boxShadow: "md",
          padding: "4",
        },
        outline: {
          border: "1px solid",
          borderColor: "gray.200",
        },
        filled: {
          bg: "gray.100",
        },
        unstyled: {
          bg: "none",
          shadow: "none",
        },
      },
      defaultProps: {
        variant: "elevated",
      },
    },
    // Other component styles
  },
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
})
