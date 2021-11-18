import Todo from "./Todo";
import TodoForm from "./TodoForm";

const initialTodos = require("./todos.json");

export const App = () => {
  return (
    <>
      <TodoForm todos={initialTodos} />
      {initialTodos?.map(({ userId, ...todo }) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
};
