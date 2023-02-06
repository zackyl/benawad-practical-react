import { useState } from "react";
export default function ({ handleSubmit }) {
  const [todo, setTodo] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setTodo("");
    handleSubmit(todo);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
