import React, { useCallback, useState } from 'react';

import './Form.scss';

function Form({
  addTodo,
}) {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    addTodo(value);
    setValue('');
    e.preventDefault();
  }, [addTodo, value]);

  return (
    <div className="Todos-Form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="Todos-Form-Input"
          placeholder="What do you need to do?"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;
