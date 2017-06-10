import React from 'react';
import TodoForm from './TodoForm/index';
import TodoList from './TodoList/index';

const Todo = (props) => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
