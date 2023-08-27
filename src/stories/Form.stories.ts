import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "@/components/Form";

const meta = {
  title: "Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
