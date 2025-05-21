import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"
import { VStack } from "@chakra-ui/react"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      control: "select",
      options: ["blue", "green", "red", "purple", "teal", "orange", "pink"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    children: "Checkbox",
  },
}

export const Checked: Story = {
  args: {
    children: "Checked",
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    isDisabled: true,
  },
}

export const Group: Story = {
  render: () => (
    <VStack align="start" spacing={2}>
      <Checkbox defaultChecked>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </VStack>
  ),
}
