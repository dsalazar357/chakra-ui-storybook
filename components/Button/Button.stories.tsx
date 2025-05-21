import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["blue", "green", "red", "purple", "teal", "orange", "pink"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    colorScheme: "blue",
    children: "Button",
  },
}

export const Secondary: Story = {
  args: {
    colorScheme: "purple",
    variant: "outline",
    children: "Button",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
}
