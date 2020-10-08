import React, { useCallback, useState } from 'react';

import { Form } from '..';
import TodoList from './TodoList';
import './Todos.scss';

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

  return (
    <>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
      />
    </>
  );
}

export default Todos;
