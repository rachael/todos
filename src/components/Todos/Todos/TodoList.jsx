import React from 'react';

import { Todo } from '..';

function TodoList({
  todos,
  completeTodo,
}) {
  const empty = !todos.length;
  const emptyMessage = 'Everything taken care of :)';

  const todoElements = todos.map((todo, i) =>
    <Todo
      key={`todo-${i}`}
      text={todo.text}
      complete={todo.complete}
      completeTodo={() => completeTodo(i)}
    />
  );

  const todoList = empty ? emptyMessage : todoElements;

  return (
    <div className="Todos">
      {todoList}
    </div>
  );
}

export default TodoList;
