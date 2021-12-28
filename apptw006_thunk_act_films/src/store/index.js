
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as counter } from './counter/reducer';
import { reducer as movies } from './movies';

const rootReducer = combineReducers(
    {
        ReducerCounter: counter,
        ReducerMovies: movies
    }
);

const logActionMiddleware = (store) => (dispatch) => (action) => {
    console.log('[LOG: logActionMiddleware - ]', action.type);

    setTimeout(
        () => {
            console.log('[TIME-OUT]');
            return dispatch(action);
        }, 2000);
}


// const middleware = applyMiddleware(logActionMiddleware);
const middleware = applyMiddleware(thunk);


const store = createStore(rootReducer, middleware);

export { store };