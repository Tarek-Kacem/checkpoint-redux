import { combineReducers } from "redux";

import { todoReducer } from "./reducer";
let visibilityFilter = (state = "SHOW_ALL", action) => {
  console.log(action);
  switch (action.type) {
    case "SET_VISIBILLITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export let todoApp = combineReducers({
  todoReducer,
  visibilityFilter,
});

// export let todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//       ),
//     visibilityFilter: visibilityFilter(
//       state.visiblilityFilter,
//       action
//     )
//   }
// }
