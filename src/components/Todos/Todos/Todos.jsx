import React, { useCallback, useState } from 'react';

import { Form } from '..';
import TodoList from './TodoList';

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo) => {
    setTodos(todos.concat({
      text: todo,
      complete: false,
    }));
  }, [todos]);

  const completeTodo = useCallback((index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  }, [todos]);

  const removeTodo = useCallback((index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }, [todos]);

  return (
    <>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default Todos;
