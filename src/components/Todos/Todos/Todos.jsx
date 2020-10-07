import React, { useCallback, useState } from 'react';

import { Form, Todo } from '..';
import './Todos.scss';

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo) => {
    setTodos(todos.concat(todo));
  }, [todos]);

  const empty = !todos.length;
  const emptyMessage = 'Everything taken care of :)';

  return (
    <>
      <Form addTodo={addTodo} />
      <div className="Todos">
        {empty ? emptyMessage :
          todos.map((todo, i) =>
            <Todo
              key={`todo-${i}`}
              text={todo}
            />
          )
        }
      </div>
    </>
  );
}

export default Todos;
