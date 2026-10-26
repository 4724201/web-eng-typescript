const todos = [
  { id: 1, title: "型を復習する", completed: turu },
  { id: 2, title: "配列を学ぶ", completed: false },
  { id: 3, title: "レポートを書く", completed: false },
];

for (const todo of todos) {
  const status = todo.completed ? "完了" : "未完了";
  console.log('${todo.id}: ${todo.title} [${status}]')
}

const completedTodos = todos.filter((todo) => {
  return todo.completed;
});

console.log(completedTodos);

const titles = todos.map((todo) => {
  return todo.title;
});

console.log(titles);
