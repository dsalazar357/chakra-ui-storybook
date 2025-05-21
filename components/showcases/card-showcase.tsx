"use client"

import { Box, Heading, SimpleGrid, Text, VStack, Image, Button, Flex } from "@chakra-ui/react"
import { Card } from "@/components/ui/card"

export default function CardShowcase() {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Card Component
        </Heading>
        <Text color="gray.600" mb={6}>
          The Card component is a flexible container for grouping and displaying content.
        </Text>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Variants
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <Card variant="elevated" p={5}>
            <Heading size="md" mb={2}>
              Elevated Card
            </Heading>
            <Text>This card has a shadow to elevate it from the background.</Text>
          </Card>

          <Card variant="outline" p={5}>
            <Heading size="md" mb={2}>
              Outline Card
            </Heading>
            <Text>This card has a border to define its boundaries.</Text>
          </Card>

          <Card variant="filled" p={5} bg="gray.100">
            <Heading size="md" mb={2}>
              Filled Card
            </Heading>
            <Text>This card has a background color to distinguish it.</Text>
          </Card>

          <Card variant="unstyled" p={5} border="1px dashed" borderColor="gray.200">
            <Heading size="md" mb={2}>
              Unstyled Card
            </Heading>
            <Text>This card has no styling by default.</Text>
          </Card>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Example Use Cases
        </Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={6}>
          <Card p={0} overflow="hidden">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Card image"
              height="200px"
              width="100%"
              objectFit="cover"
            />
            <Box p={5}>
              <Heading size="md" mb={2}>
                Media Card
              </Heading>
              <Text mb={4}>This card contains an image and text content.</Text>
              <Button colorScheme="teal" size="sm">
                Learn More
              </Button>
            </Box>
          </Card>

          <Card p={5}>
            <Heading size="md" mb={4}>
              Interactive Card
            </Heading>
            <Text mb={4}>This card contains interactive elements.</Text>
            <Flex gap={2}>
              <Button colorScheme="teal" flex="1">
                Accept
              </Button>
              <Button variant="outline" colorScheme="red" flex="1">
                Decline
              </Button>
            </Flex>
          </Card>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}
