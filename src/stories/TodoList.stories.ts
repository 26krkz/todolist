import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "@/components/TodoList";
import { todos } from "@/Todos";

const meta = {
  title: "TodoList",
  component: TodoList,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    todos,
  },
};

export const AddTodo: Story = {
  args: {
    todos,
  },
};

export const EditTodo: Story = {
  args: {
    todos,
  },
};

export const DeleteTodo: Story = {
  args: {
    todos,
  },
};
