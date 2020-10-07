import React from 'react';
import './Todos.scss';

function Todos() {
  return (
    <div className="Todos">
      <header className="Todos-header">
        <p>
          Edit <code>src/Todos.js</code> and save to reload.
        </p>
        <a
          className="Todos-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Todos;
