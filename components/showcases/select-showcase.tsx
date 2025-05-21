"use client"

import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react"
import { Select } from "@/components/ui/select"

export default function SelectShowcase() {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Select Component
        </Heading>
        <Text color="gray.600" mb={6}>
          The Select component is used to create a dropdown menu for users to select from a list of options.
        </Text>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Variants
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <FormControl>
            <FormLabel>Outline (Default)</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Filled</FormLabel>
            <Select variant="filled" placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Flushed</FormLabel>
            <Select variant="flushed" placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Unstyled</FormLabel>
            <Select variant="unstyled" placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Sizes
        </Heading>
        <VStack spacing={4} align="stretch">
          <Select size="xs" placeholder="X-Small size">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select size="sm" placeholder="Small size">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select size="md" placeholder="Medium size (default)">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select size="lg" placeholder="Large size">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </VStack>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          States
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <FormControl isInvalid>
            <FormLabel>Error State</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <FormErrorMessage>Please select an option.</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Disabled State</FormLabel>
            <Select isDisabled placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>With Helper Text</FormLabel>
            <Select placeholder="Select country">
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </Select>
            <FormHelperText>Select your country of residence.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Required</FormLabel>
            <Select placeholder="Select option" isRequired>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}
