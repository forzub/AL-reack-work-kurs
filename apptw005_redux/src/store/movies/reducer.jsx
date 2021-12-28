
const initState = { items: []};

const reducer = (state = initState, action) => {
  switch(action.type){
    case 'movies/get_films_list' : return {...state, items: [...action.items] };
    default : return state;
  }
};


export { reducer };