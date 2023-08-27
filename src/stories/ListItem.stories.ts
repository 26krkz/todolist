import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "@/components/ListItem";

const meta = {
  title: "ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnChecked: Story = {
  args: {
    todo: {
      id: "1",
      title: "掃除をする",
      isCompleted: false,
    },
  },
};

export const Checked: Story = {
  args: {
    todo: {
      id: "1",
      title: "掃除をする",
      isCompleted: true,
    },
  },
};
