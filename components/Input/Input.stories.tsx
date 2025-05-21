import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
  },
}

export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled input",
  },
}

export const Flushed: Story = {
  args: {
    variant: "flushed",
    placeholder: "Flushed input",
  },
}

export const WithError: Story = {
  args: {
    isInvalid: true,
    placeholder: "Error input",
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: "Disabled input",
  },
}
