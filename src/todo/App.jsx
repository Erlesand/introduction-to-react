import { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

// const initialTodos = require("./todos.json");

export const App = () => {
  // const [todos, setTodos] = useState(initialTodos);
  const [todos, setTodos] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status !== "idle") {
      return;
    }

    const fetchTodos = async () => {
      setStatus("loading");

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const _todos = await response.json();

        setTodos(_todos.map(({ userId, ...todo }) => todo));
        setStatus("success");
      } catch (error) {
        setStatus("failure");
      }
    };

    fetchTodos();
  }, [status]);

  useEffect(() => {
    const incomplete = todos?.reduce((count, todo) => count + !todo.completed, 0);

    document.title = `Todos (${todos ? incomplete : "N/A"})`;
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      completed: false,
      title,
    };

    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return "Loading todos...";
  }

  return (
    <>
      <TodoForm createTodo={createTodo} />
      {todos?.map(({ userId, ...todo }) => (
        <Todo key={todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))}
    </>
  );
};
