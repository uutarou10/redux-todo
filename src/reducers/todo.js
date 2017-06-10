import { combineReducers } from 'redux';

const initState = [
  {id:0,text: 'hogefuga'}
];

const todo = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        {
          id: new Date(),
          text: action.text,
        },
        ...state
      ];

    case 'TOGGLE_TODO':
      return state.filter(todo => {
        todo.id !== action.id;
      });

    default:
      return state;
  }
}

export default combineReducers([
  todo
]);

export const getTodo = (state) => state;
