export default function ({ todo, toggleTodo, removeTodo }) {
  return (
    <div key={todo.id}>
      <span
        style={todo.complete ? { textDecoration: "line-through" } : {}}
        onClick={() => toggleTodo(todo)}
      >
        {todo.todo}
      </span>{" "}
      <button
        onClick={() => {
          removeTodo(todo);
        }}
      >
        X
      </button>
    </div>
  );
}
