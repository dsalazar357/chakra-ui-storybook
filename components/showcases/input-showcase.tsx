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
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import { Input } from "@/components/ui/input"
import { SearchIcon, EmailIcon, LockIcon } from "@chakra-ui/icons"

export default function InputShowcase() {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading as="h2" size="lg" mb={2}>
          Input Component
        </Heading>
        <Text color="gray.600" mb={6}>
          The Input component is used to get user input in a text field.
        </Text>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Variants
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <FormControl>
            <FormLabel>Outline (Default)</FormLabel>
            <Input placeholder="Outline input" />
          </FormControl>

          <FormControl>
            <FormLabel>Filled</FormLabel>
            <Input variant="filled" placeholder="Filled input" />
          </FormControl>

          <FormControl>
            <FormLabel>Flushed</FormLabel>
            <Input variant="flushed" placeholder="Flushed input" />
          </FormControl>

          <FormControl>
            <FormLabel>Unstyled</FormLabel>
            <Input variant="unstyled" placeholder="Unstyled input" />
          </FormControl>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          Sizes
        </Heading>
        <VStack spacing={4} align="stretch">
          <Input size="xs" placeholder="X-Small size" />
          <Input size="sm" placeholder="Small size" />
          <Input size="md" placeholder="Medium size (default)" />
          <Input size="lg" placeholder="Large size" />
        </VStack>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          States
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <FormControl isInvalid>
            <FormLabel>Error State</FormLabel>
            <Input placeholder="Error input" />
            <FormErrorMessage>This field is required.</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Disabled State</FormLabel>
            <Input isDisabled placeholder="Disabled input" />
          </FormControl>

          <FormControl>
            <FormLabel>Read Only</FormLabel>
            <Input isReadOnly value="Read-only input" />
          </FormControl>

          <FormControl>
            <FormLabel>With Helper Text</FormLabel>
            <Input placeholder="Input with helper" />
            <FormHelperText>Enter a valid email address.</FormHelperText>
          </FormControl>
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h3" size="md" mb={4}>
          With Icons
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <FormControl>
            <FormLabel>Left Icon</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input placeholder="Search..." />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Right Icon</FormLabel>
            <InputGroup>
              <Input placeholder="Enter email" />
              <InputRightElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Password Input</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.300" />
              </InputLeftElement>
              <Input type="password" placeholder="Enter password" />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}
