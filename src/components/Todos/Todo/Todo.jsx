import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import React from 'react';

import './Todo.scss';

function Todo({
  text,
  complete,
  completeTodo,
}) {
  const todoClasses = classNames(
    'Todo-Text',
    { 'Todo-Text_complete': complete }
  );
  const completeIcon = complete ? faCheckCircle : faCircle;
  return (
    <div className="Todo">
      <a
        className="Todo-Complete"
        onClick={completeTodo}
      >
        <FontAwesomeIcon icon={completeIcon} />
      </a>
      <div className={todoClasses}>
        {text}
      </div>
    </div>
  );
}

export default Todo;
