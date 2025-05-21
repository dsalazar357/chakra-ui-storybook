"use client"

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import ComponentNav from "@/components/component-nav"
import { useState } from "react"
import ButtonShowcase from "@/components/showcases/button-showcase"
import CardShowcase from "@/components/showcases/card-showcase"
import InputShowcase from "@/components/showcases/input-showcase"
import CheckboxShowcase from "@/components/showcases/checkbox-showcase"
import SelectShowcase from "@/components/showcases/select-showcase"

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("button")

  const renderShowcase = () => {
    switch (activeComponent) {
      case "button":
        return <ButtonShowcase />
      case "card":
        return <CardShowcase />
      case "input":
        return <InputShowcase />
      case "checkbox":
        return <CheckboxShowcase />
      case "select":
        return <SelectShowcase />
      default:
        return <ButtonShowcase />
    }
  }

  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={8}>
            <Heading as="h1" size="2xl" color="teal.500" mb={4}>
              Chakra UI Components
            </Heading>
            <Text fontSize="xl" color="gray.600">
              A showcase of reusable Chakra UI components for Next.js
            </Text>
          </Box>

          <Box display="flex" gap={8}>
            <ComponentNav activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
            <Box flex="1" bg="white" p={6} borderRadius="lg" boxShadow="md">
              {renderShowcase()}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}
