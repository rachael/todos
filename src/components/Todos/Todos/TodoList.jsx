import React from 'react';

import { Todo } from '..';

import './TodoList.scss';

function TodoList({
  todos,
  completeTodo,
  removeTodo,
}) {
  const todoElements = todos.map(todo =>
    <Todo
      key={todo.id}
      text={todo.text}
      complete={todo.complete}
      completeTodo={() => completeTodo(todo.id)}
      removeTodo={() => removeTodo(todo.id)}
    />
  );

  return (
    <div className="Todos">
      {!!todos.length && todoElements}
    </div>
  );
}

export default TodoList;
