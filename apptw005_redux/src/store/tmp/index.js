import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counterReducer } from './counter/reducer';
import { moviesReducer } from './movies/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  movies: moviesReducer,
});

const store = createStore(rootReducer);

export { store };



