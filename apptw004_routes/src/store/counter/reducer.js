const initState = { counter: 0, show: true };

const counterReducer = (state =  initState, action) => {
  if (action.type === 'increment') {
    return { ...state, counter: state.counter + 1 }
  }
  if (action.type === 'deccrement') {
    return { ...state, counter: state.counter - 1 }
  }
  if (action.type === 'increase') {
    return { ...state, counter: state.counter + action.step }
  }
  if (action.type === 'show') {
    return { ...state, show: !state.show }
  }

  return state;
};

export { counterReducer };
