import {createStore} from "redux";
import { todoApp } from "./states";

export let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())