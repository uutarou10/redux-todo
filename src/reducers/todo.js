import { combineReducers } from 'redux';

const initState = [
  {
    id: 0,
    body: 'hogefuga;,
  }
];

const todo = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return null;
    case 'TOGGLE_TODO' :
      return null;
    default:
      return state;
  }
}

export default combineReducers([
  todo
]);

export const getId = (state) => { state.id };
export const getBody = (state) => { state.body };
