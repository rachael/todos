import React from 'react';

import { Todo } from '..';

function TodoList({
  todos,
  completeTodo,
  removeTodo,
}) {
  const todoElements = todos.map((todo, i) =>
    <Todo
      key={`todo-${i}`}
      text={todo.text}
      complete={todo.complete}
      completeTodo={() => completeTodo(i)}
      removeTodo={() => removeTodo(i)}
    />
  );

  return (
    <div className="Todos">
      {!!todos.length && todoElements}
    </div>
  );
}

export default TodoList;
