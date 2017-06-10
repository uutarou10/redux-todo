import React from 'react';
import contain from './contain';

const TodoList = (props) => {
  const {
    todo,
    toggleComplete,
  }  = props;

  return (
    <div>
      <ul>
        {todo.length}
      </ul>
    </div>
  );
};

export default contain(TodoList);
