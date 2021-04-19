import React from "react";
import { useSelector } from "react-redux";
import FilterLink from "./FilterLink";
import TodoItem from "./TodoItem";

function TodoList() {
  let todos = useSelector((state) => state.todoReducer);
  let visiblityFilter = useSelector((state) => state.visibilityFilter);

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case "SHOW_ALL":
        return todos;
      case "SHOW_COMPLETED":
        return todos.filter((t) => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter((t) => !t.completed);
    }
  };
  const visibleTodos = getVisibleTodos(todos, visiblityFilter);
  return (
    <div className="my-4">
      <ul>
        {visibleTodos.map((todo) => {
          return (
            <li>
              {" "}
              <TodoItem key={todo.id} todo={todo} />
            </li>
          );
        })}
      </ul>
      <p className="filter">
        Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      </p>
    </div>
  );
}

export default TodoList;
