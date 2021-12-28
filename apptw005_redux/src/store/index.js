
import { combineReducers, createStore } from 'redux';
import { reducer as counter } from './counter/reducer';
import { reducer as movies } from './movies/reducer';



const store = createStore(combineReducers(
    {
        ReducerCounter: counter,
        ReducerMovies  : movies
    }
));

export { store };