const todos = [
  { id: 1, title: "型を復習する", completed: true },
  { id: 2, title: "配列を学ぶ", completed: false },
  { id: 3, title: "レポートを書く", completed: false },
  { id: 4, title: "課題を提出する", completed: false },
];

console.log("【更新前のTODO一覧】");

for (const todo of todos) {
  const status = todo.completed ? "完了" : "未完了";
  console.log(todo.id + ": " + todo.title + " [" + status + "]");
}

const completedBefore = todos.filter((todo) => todo.completed).length;

console.log("\n【更新したTODO】");

for (const todo of todos) {
  if (todo.completed === false) {
    todo.completed = true;
    console.log(todo.id + ": " + todo.title + " [完了]");
  }
}

const completedAfter = todos.filter((todo) => todo.completed).length;

console.log(
  "完了件数: 更新前 " +
    completedBefore +
    "件 -> 更新後 " +
    completedAfter +
    "件"
);

console.log("\n【更新後のTODO一覧】");

for (const todo of todos) {
  const status = todo.completed ? "完了" : "未完了";
  console.log(todo.id + ": " + todo.title + " [" + status + "]");
}