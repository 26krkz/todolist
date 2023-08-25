import type { Todo } from "@/Type";
import { useRef, useState } from "react";

type Props = {
  addTodo: (todo: Todo) => void;
};

export function Form({ addTodo }: Props) {
  const [todoTitle, setTodoTitle] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (inputRef.current) {
          inputRef.current.focus();
        }

        addTodo({
          id: new Date().toISOString(),
          title: todoTitle,
          isCompleted: false,
        });
      }}
    >
      <input type="text" ref={inputRef} onChange={(e) => setTodoTitle(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}
