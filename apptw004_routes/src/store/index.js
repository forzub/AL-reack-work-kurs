import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter/reducer';
import { moviesReducer } from './movies/reducer';


const store = createStore(combineReducers({
  counter: counterReducer,
  movies: moviesReducer,
}));

export { store };


