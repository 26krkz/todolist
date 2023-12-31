import { Todo, Todos } from "@/Type";
import { Form } from "@/components/Form";
import { ListItem } from "@/components/ListItem";
import { useState } from "react";
import styles from "@/styles/todolist.module.css";

type Props = {
  todos: Todos;
};

export function TodoList(props: Props) {
  const [todos, setTodos] = useState(props.todos);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function editTodo(target: Todo) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === target.id) {
          return {
            id: todo.id,
            title: target.title,
            isCompleted: todo.isCompleted,
          };
        } else {
          return todo;
        }
      })
    );
  }

  function deleteTodo(targetID: Todo["id"]) {
    setTodos(todos.filter((todo) => todo.id !== targetID));
  }

  function clickChangeBox(targetID: Todo["id"]) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetID) {
          return {
            id: todo.id,
            title: todo.title,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      })
    );
  }

  const listItemFunctions = {
    clickChangeBox,
    editTodo,
    deleteTodo,
  };

  return (
    <div className={styles.container}>
      <h1>TODO LIST</h1>
      <Form addTodo={addTodo} />
      <ul className={styles.list}>
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} {...listItemFunctions} />
        ))}
      </ul>
    </div>
  );
}
