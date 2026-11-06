
import {
  fetchTodos,
  findTodo,
  toggleTodo,
  countIncompleteTodos
} from "./todo-service.js";

const loaded = await fetchTodos();
console.log(loaded);

const found = await findTodo(2);

if (found === undefined) {
  console.log("TODOが見つからない");
} else {
  console.log(found.title);
}

const updated = await toggleTodo(2);
console.log(updated);

const incompleteCount = await countIncompleteTodos();
console.log("未完了TODOの件数:", incompleteCount);
