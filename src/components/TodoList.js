import { useState } from "react";
import TodoListItem from "./TodoListItem";

const Filters = {
  All: "All",
  Active: "Active",
  Complete: "Complete",
};

export default function ({ todos, setTodos }) {
  const [filter, setFilter] = useState(0);
  const [toggleAll, setToggleAll] = useState(true);
  // NOTE, not good to edit state so might be better to create new array and use setState instead of useArrayState hook
  const removeTodo = (todo) => {
    setTodos((todos) => {
      const idx = todos.indexOf(todo);
      todos.splice(idx, 1);
    });
  };
  const toggleTodo = (todo) => {
    setTodos((todos) => (todo.complete = !todo.complete));
  };
  const removeCompleteTodos = () => {
    setTodos((todosin) => {
      todosin.splice(
        0,
        todosin.length,
        ...todosin.filter((todo) => !todo.complete)
      );
    });
  };
  const toggleAllComplete = () => {
    setTodos((todosin) => {
      todosin.forEach((todo) => (todo.complete = toggleAll));
    });
    setToggleAll((prev) => !prev);
  };

  let todosFiltered = todos;
  if (filter === Filters.Active) {
    todosFiltered = todos.filter((todo) => !todo.complete);
  } else if (filter === Filters.Complete) {
    todosFiltered = todos.filter((todo) => todo.complete);
  }

  return (
    <div>
      {Object.values(Filters).map((filterName) => (
        <button
          className={
            filter === filterName ? "App-Button-Active" : "App-Button-Default"
          }
          key={filterName}
          onClick={() => setFilter(filterName)}
        >
          {filterName}
        </button>
      ))}
      <div onClick={toggleAllComplete}>
        <button>
          Toggle all complete {toggleAll ? " (True)" : " (False)"}
        </button>
      </div>
      {todosFiltered.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
      <div>Todos left: {todos.filter((todo) => !todo.complete).length}</div>
      {todos.some((todo) => todo.complete) ? (
        <div>
          <button onClick={removeCompleteTodos}>
            Remove all complete Todos
          </button>
        </div>
      ) : null}
    </div>
  );
}
