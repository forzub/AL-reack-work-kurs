import isEmpty from 'ramda/src/isEmpty';

const actions = Object.freeze(
    {
        GET_MOVIES_TO_REDUCER : 'movies/get_films_list',
    }
);



const loadMovies = () => (dispatch, getState) => {
    const url = 'http://api.tvmaze.com/shows';

    // const { ReducerMovies} = getState();
    const { ReducerMovies : { items } } = getState();
    console.log('[ACTIONS3: ReducerMovies]', items);
    console.log('[ACTIONS3: ReducerMovies isEmpty-]', isEmpty(items));

    
    fetch(url)
        .then((response) => response.json())
        .then((data) => { 
            // console.log('[ACTIONS1:]', data);
            dispatch( { type: actions.GET_MOVIES_TO_REDUCER, payload: [...data] } ); 
        })
        // .then((data) => console.log('[ACTIONS:]', data))
        .catch((err) => { console.log('[ACTIONS-err:]', err);});
}


export { actions , loadMovies };