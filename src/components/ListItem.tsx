import type { Todo } from "@/Type";
import { useRef, useState } from "react";
import styles from "@/styles/listitem.module.css";

type Props = {
  todo: Todo;
  clickChangeBox: (targetID: Todo["id"]) => void;
  editTodo: (target: Todo) => void;
  deleteTodo: (targetID: Todo["id"]) => void;
};

export function ListItem({ todo, clickChangeBox, editTodo, deleteTodo }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <li className={styles.listItem}>
      <label className={styles.label}>
        {isEdit ? (
          <input className={styles.textbox} type="text" defaultValue={editText} onChange={(e) => setEditText(e.target.value)} />
        ) : (
          <>
            <input ref={inputRef} className={styles.checkbox} type="checkbox" defaultChecked={todo.isCompleted} onClick={() => clickChangeBox(todo.id)} />
            <span className={styles.title}>{todo.title}</span>
          </>
        )}
      </label>
      <div>
        <button
          className={styles.editButton}
          onClick={() => {
            if (isEdit) {
              editTodo({ ...todo, title: editText });
              setIsEdit(!isEdit);
            } else {
              setIsEdit(!isEdit);
              inputRef.current?.focus();
            }
          }}
        >
          {isEdit ? "Done" : "Edit"}
        </button>
        <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
