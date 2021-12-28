import { actions } from './actions';

const initState = { counter : 0 };

const reducer = (state = initState, action) => {
  switch(action.type){
    case actions.COUNTER_INCREMENT : return {...state, counter: state.counter + 1 };
    case actions.COUNTER_DECREMENT : return {...state, counter: state.counter - 1 };
    case actions.COUNTER_INCREASE : return {...state, counter: state.counter - action.payload };

    default : return state;
  }
};



export { reducer };