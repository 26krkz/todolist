import type { Meta, StoryObj } from "@storybook/react";
import { TodoList } from "@/components/TodoList";
import { todos } from "@/Todos";
import { within, userEvent, fireEvent } from "@storybook/testing-library";

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

export const CheckTodo: Story = {
  args: {
    todos,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("買い物に行く"));
  },
};

export const AddTodo: Story = {
  args: {
    todos,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "勉強する").then(() => {
      userEvent.click(canvas.getByRole("button", { name: "Add Todo" }));
    });
  },
};

export const AddTodoWithoutText: Story = {
  args: {
    todos,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Add Todo" }));
  },
};

export const EditTodo: Story = {
  args: {
    todos,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const editButton = canvas.getAllByRole("button", { name: "Edit" })[0];
    await userEvent.click(editButton);
    const textbox = canvas.getByDisplayValue("買い物に行く");
    fireEvent.change(textbox, { target: { value: "勉強する" } });
    await userEvent.click(canvas.getByRole("button", { name: "Done" }));
  },
};

export const DeleteTodo: Story = {
  args: {
    todos,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const deleteButton = canvas.getAllByRole("button", { name: "Delete" })[0];
    await userEvent.click(deleteButton);
  },
};
