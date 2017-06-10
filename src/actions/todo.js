export const add = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
}

export const toggleComplete = () => {
  return {
    type: 'TOGGLE_COMPLETE'
  };
}
