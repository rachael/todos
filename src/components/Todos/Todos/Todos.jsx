import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from '..';
import TodoList from './TodoList';

import {
  addTodo,
  deleteTodo,
  completeTodo,
} from 'redux/actions';

function Todos() {
  const dispatch = useDispatch();

  const dispatchAddTodo = text => dispatch(addTodo(text));
  const dispatchDeleteTodo = id => dispatch(deleteTodo(id));
  const dispatchCompleteTodo = id => dispatch(completeTodo(id));

  const todos = useSelector(state => state);

  return (
    <>
      <Form addTodo={dispatchAddTodo} />
      <TodoList
        todos={todos}
        completeTodo={dispatchCompleteTodo}
        removeTodo={dispatchDeleteTodo}
      />
    </>
  );
}

export default Todos;
