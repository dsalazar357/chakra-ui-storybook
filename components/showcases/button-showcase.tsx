"use client"

import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"

export default function ButtonShowcase() {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Button Component
        </Heading>
        <Text color="gray.600" mb={6}>
          The Button component is used to trigger an action or event.
        </Text>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Variants
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          <Button colorScheme="teal">Solid</Button>
          <Button colorScheme="teal" variant="outline">
            Outline
          </Button>
          <Button colorScheme="teal" variant="ghost">
            Ghost
          </Button>
          <Button colorScheme="teal" variant="link">
            Link
          </Button>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Sizes
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          <Button colorScheme="purple" size="xs">
            X-Small
          </Button>
          <Button colorScheme="purple" size="sm">
            Small
          </Button>
          <Button colorScheme="purple" size="md">
            Medium
          </Button>
          <Button colorScheme="purple" size="lg">
            Large
          </Button>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Colors
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          <Button colorScheme="blue">Blue</Button>
          <Button colorScheme="green">Green</Button>
          <Button colorScheme="red">Red</Button>
          <Button colorScheme="orange">Orange</Button>
          <Button colorScheme="pink">Pink</Button>
          <Button colorScheme="teal">Teal</Button>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          States
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          <Button isLoading colorScheme="teal">
            Loading
          </Button>
          <Button isDisabled colorScheme="teal">
            Disabled
          </Button>
          <Button isActive colorScheme="teal">
            Active
          </Button>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}
