import type { Todo } from "@/Type";
import { useRef, useState } from "react";
import styles from "@/styles/form.module.css";

type Props = {
  addTodo: (todo: Todo) => void;
};

export function Form({ addTodo }: Props) {
  const [todoTitle, setTodoTitle] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
          if (todoTitle === "") {
            setErrorFlag(!errorFlag);
            return;
          }

          addTodo({
            id: new Date().toISOString(),
            title: todoTitle,
            isCompleted: false,
          });
        }}
      >
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          onChange={(e) => {
            setTodoTitle(e.target.value);
            setErrorFlag(false);
          }}
        />
        <button className={styles.button} type="submit">
          Add Todo
        </button>
      </form>
      {errorFlag && <p className={styles.error}>追加するには1文字以上記入してください。</p>}
    </>
  );
}
