const initState = { items: [] };

const moviesReducer = (state =  initState, action) => {
    if(action.type === 'setMovies'){

      return {...state, items : action.items };

    }
    
    return state;
  };

  export { moviesReducer };