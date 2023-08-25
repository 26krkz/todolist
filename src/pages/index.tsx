import { TodoList } from "@/components/TodoList";
import { todos } from "@/Todos";

export default function Home() {
  return (
    <>
      <TodoList todos={todos} />
    </>
  );
}
