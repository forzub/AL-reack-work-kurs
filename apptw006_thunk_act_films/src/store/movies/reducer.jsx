import { actions } from './actions';

const initState = { items: []};

const reducer = (state = initState, action) => {
  switch(action.type){
    case actions.GET_MOVIES_TO_REDUCER : return {...state, items: [...action.payload] };
    default : return state;
  }
};


export { reducer };