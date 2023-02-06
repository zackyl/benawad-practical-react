import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useArrayState } from "../hooks/useArrayState";
import shortid from "shortid";

export default function (props) {
  const [todos, setTodos] = useArrayState([]);
  const handleSubmit = (todo) => {
    setTodos((todos) =>
      todos.push({ id: shortid.generate(), todo, complete: false })
    );
    console.log(`pushing onto todos ${todos}`);
  };

  return (
    <div>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
