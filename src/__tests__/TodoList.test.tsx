import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/stories/TodoList.stories";
import "@testing-library/jest-dom";
import { waitFor } from "@storybook/testing-library";

const { Default, CheckTodo, AddTodo, AddTodoWithoutText, EditTodo, DeleteTodo } = composeStories(stories);

describe("TodoList.tsxのテスト", () => {
  test("TodoListにTodoが表示される。", () => {
    render(<Default />);
    expect(screen.getAllByRole("listitem")[0]).toBeInTheDocument();
  });

  test("TodoをクリックするとチェックボックスがCheckedの状態になる。", async () => {
    const { container } = render(<CheckTodo />);
    await CheckTodo.play({ canvasElement: container });
    expect(screen.getByRole("checkbox", { name: "買い物に行く" })).toBeChecked();
  });

  test("フォームにテキストを入れて「Add Todo」ボタンをクリックするとTodoが追加される。", async () => {
    const { container } = render(<AddTodo />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    await AddTodo.play({ canvasElement: container });
    await waitFor(() => expect(screen.getAllByRole("listitem")).toHaveLength(4));
  });

  test("フォームにテキストを入れずに「Add Todo」ボタンをクリックするとエラー文が表示される。", async () => {
    const { container } = render(<AddTodoWithoutText />);
    await AddTodoWithoutText.play({ canvasElement: container });
    expect(await screen.findByText("追加するには1文字以上記入してください。")).toBeInTheDocument();
  });

  test("TodoListの「Edit」ボタンをクリックするとTodoが編集できる", async () => {
    const { container } = render(<EditTodo />);
    expect(screen.getByRole("checkbox", { name: "買い物に行く" })).toBeInTheDocument();
    await EditTodo.play({ canvasElement: container });
    await waitFor(() => expect(screen.getByRole("checkbox", { name: "勉強する" })).toBeInTheDocument());
  });

  test("TodoListの「Delete」ボタンをクリックするとTodoが削除される", async () => {
    const { container } = render(<DeleteTodo />);
    expect(screen.getByRole("checkbox", { name: "買い物に行く" })).toBeInTheDocument();
    await DeleteTodo.play({ canvasElement: container });
    await waitFor(() => expect(screen.queryByRole("checkbox", { name: "買い物に行く" })).not.toBeInTheDocument());
  });
});
