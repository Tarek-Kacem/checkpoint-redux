import { ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";

let todos = [
  {
    id: 1,
    name: "One",
    completed: false,
  },
  {
    id: 2,
    name: "Two",
    completed: false,
  },
  {
    id: 3,
    name: "Three",
    completed: false,
  },
];
export let todoReducer = (state=todos , action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case UPDATE_TODO:
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    default:
      return state;
  }
};
