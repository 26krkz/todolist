import type { Todo } from "@/Type";
import { useState } from "react";

type Props = {
  todo: Todo;
  clickChangeBox: (targetID: Todo["id"]) => void;
  editTodo: (target: Todo) => void;
  deleteTodo: (targetID: Todo["id"]) => void;
};

export function ListItem({ todo, clickChangeBox, editTodo, deleteTodo }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  return (
    <li>
      <label>
        <input type="checkbox" defaultChecked={todo.isCompleted} onClick={() => clickChangeBox(todo.id)} />
        {isEdit ? <input type="text" defaultValue={editText} onChange={(e) => setEditText(e.target.value)} /> : todo.title}
      </label>
      <button
        onClick={() => {
          if (isEdit) {
            editTodo({ ...todo, title: editText });
            setIsEdit(!isEdit);
          } else {
            setIsEdit(!isEdit);
          }
        }}
      >
        {isEdit ? "Done" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
