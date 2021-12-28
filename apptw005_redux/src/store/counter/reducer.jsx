const initState = { counter : 0 };

const reducer = (state = initState, action) => {
  switch(action.type){
    case 'inc' : return {...state, counter: state.counter + 1 };
    case 'dec' : return {...state, counter: state.counter - 1 };
    default : return state;
  }
};



export { reducer };