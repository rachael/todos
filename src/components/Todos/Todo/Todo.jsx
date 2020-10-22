import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import './Todo.scss';

function Todo({
  text,
  complete,
  completeTodo,
  removeTodo,
}) {
  const todoClasses = classNames(
    'Todo-Text',
    { 'Todo-Text_complete': complete }
  );
  const completeIcon = complete ? faCheckCircle : faCircle;
  return (
    <div className="Todo">
      <div
        className="Todo-Complete"
        onClick={completeTodo}
      >
        <FontAwesomeIcon icon={completeIcon} title="Todo-Complete" />
      </div>
      <div
        className="Todo-Remove"
        onClick={removeTodo}
      >
        <FontAwesomeIcon icon={faTimes} title="Todo-Remove" />
      </div>
      <div className={todoClasses}>
        {text}
      </div>
    </div>
  );
}

export default Todo;
