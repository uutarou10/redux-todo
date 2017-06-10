import React from 'react';
import contain from './contain'

const TodoForm = (props) => {
  const { add } = props;

  return (
    <div>
      <p>form</p>
    </div>
  );
};

export default contain(TodoForm);
