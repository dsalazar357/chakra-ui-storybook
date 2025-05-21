import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"
import { Text, VStack, Heading } from "@chakra-ui/react"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outline", "filled", "unstyled"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Elevated: Story = {
  args: {
    variant: "elevated",
    p: 5,
    width: "300px",
    children: (
      <VStack align="start" spacing={3}>
        <Heading size="md">Card Title</Heading>
        <Text>This is a basic card with elevated styling.</Text>
      </VStack>
    ),
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    p: 5,
    width: "300px",
    children: (
      <VStack align="start" spacing={3}>
        <Heading size="md">Card Title</Heading>
        <Text>This is a card with outline styling.</Text>
      </VStack>
    ),
  },
}

export const Filled: Story = {
  args: {
    variant: "filled",
    p: 5,
    width: "300px",
    children: (
      <VStack align="start" spacing={3}>
        <Heading size="md">Card Title</Heading>
        <Text>This is a card with filled styling.</Text>
      </VStack>
    ),
  },
}
