// todo
import { actions } from "./actions";
import clone from 'ramda/src/clone';

const initState = { lists: {} };

const includeListItem = (state, payload) => {
  const newState = clone(state);
  newState.lists[payload.id] = payload;
  return newState;
}



const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_LISTS_ITEM       : return includeListItem(state, action.payload);
    case actions.LOAD_TOTAL_LIST      : return {...state, lists: action.payload};
    case actions.ADD_ID_KEY           : return {...state, idkey: action.payload};
    case actions.EDIT_LIST_TITUL      : return includeListItem(state, action.payload);
    case actions.REMOVE_LIST_ELEMENT  : return state;
    case actions.ADD_ID_CLICKED_KEY   : return {...state, clickedKey: action.payload}; 
    case actions.SET_TASK_ITEM        : return action.payload;
    default: return state;
  }

};

export { reducer };
