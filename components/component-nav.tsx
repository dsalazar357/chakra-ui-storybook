"use client"

import { Box, VStack, Button, Text } from "@chakra-ui/react"

interface ComponentNavProps {
  activeComponent: string
  setActiveComponent: (component: string) => void
}

const components = [
  { id: "button", name: "Button" },
  { id: "card", name: "Card" },
  { id: "input", name: "Input" },
  { id: "checkbox", name: "Checkbox" },
  { id: "select", name: "Select" },
]

export default function ComponentNav({ activeComponent, setActiveComponent }: ComponentNavProps) {
  return (
    <Box width="200px" bg="white" p={4} borderRadius="lg" boxShadow="md">
      <Text fontWeight="bold" mb={4} color="gray.700">
        Components
      </Text>
      <VStack align="stretch" spacing={2}>
        {components.map((component) => (
          <Button
            key={component.id}
            variant={activeComponent === component.id ? "solid" : "ghost"}
            colorScheme={activeComponent === component.id ? "teal" : "gray"}
            justifyContent="flex-start"
            onClick={() => setActiveComponent(component.id)}
          >
            {component.name}
          </Button>
        ))}
      </VStack>
    </Box>
  )
}
