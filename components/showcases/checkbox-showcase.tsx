"use client"

import { Box, Heading, SimpleGrid, Text, VStack, Stack, FormControl, FormLabel } from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxShowcase() {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Checkbox Component
        </Heading>
        <Text color="gray.600" mb={6}>
          The Checkbox component is used in forms when a user needs to select multiple values from several options.
        </Text>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Basic Usage
        </Heading>
        <Stack spacing={3}>
          <Checkbox>Basic checkbox</Checkbox>
          <Checkbox defaultChecked>Checked by default</Checkbox>
          <Checkbox isDisabled>Disabled checkbox</Checkbox>
          <Checkbox isDisabled defaultChecked>
            Disabled and checked
          </Checkbox>
        </Stack>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Sizes
        </Heading>
        <Stack spacing={3}>
          <Checkbox size="sm">Small size</Checkbox>
          <Checkbox size="md">Medium size (default)</Checkbox>
          <Checkbox size="lg">Large size</Checkbox>
        </Stack>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Colors
        </Heading>
        <SimpleGrid columns={[2, 3, 4]} spacing={4}>
          <Checkbox colorScheme="red" defaultChecked>
            Red
          </Checkbox>
          <Checkbox colorScheme="green" defaultChecked>
            Green
          </Checkbox>
          <Checkbox colorScheme="blue" defaultChecked>
            Blue
          </Checkbox>
          <Checkbox colorScheme="yellow" defaultChecked>
            Yellow
          </Checkbox>
          <Checkbox colorScheme="purple" defaultChecked>
            Purple
          </Checkbox>
          <Checkbox colorScheme="teal" defaultChecked>
            Teal
          </Checkbox>
          <Checkbox colorScheme="orange" defaultChecked>
            Orange
          </Checkbox>
          <Checkbox colorScheme="pink" defaultChecked>
            Pink
          </Checkbox>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Checkbox Groups
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <FormControl>
            <FormLabel>Vertical Group</FormLabel>
            <Stack spacing={2}>
              <Checkbox>Option 1</Checkbox>
              <Checkbox>Option 2</Checkbox>
              <Checkbox>Option 3</Checkbox>
            </Stack>
          </FormControl>

          <FormControl>
            <FormLabel>Horizontal Group</FormLabel>
            <Stack direction="row" spacing={4}>
              <Checkbox>Option A</Checkbox>
              <Checkbox>Option B</Checkbox>
              <Checkbox>Option C</Checkbox>
            </Stack>
          </FormControl>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Indeterminate State
        </Heading>
        <Stack spacing={5} direction="column">
          <Checkbox isIndeterminate>Parent checkbox (indeterminate)</Checkbox>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox>Child checkbox 1</Checkbox>
            <Checkbox>Child checkbox 2</Checkbox>
            <Checkbox>Child checkbox 3</Checkbox>
          </Stack>
        </Stack>
      </Box>
    </VStack>
  )
}
