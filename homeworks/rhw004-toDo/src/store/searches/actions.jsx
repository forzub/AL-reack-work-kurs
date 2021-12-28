//searches

const actions = Object.freeze(
  {
     SEARCH_LIST_CHANGE_VALUE : 'searches/search_list_change_value',
     SEARCH_TASK_CHANGE_VALUE : 'searches/search_task_change_value',
     SEARCH_TASK_CHECK_CHANGE : 'searches/search_task_check_change',
     TF_TITLE   : 'tf_title',
     TF_DEDLINE : 'tf_dedline',
     TF_DONE    : 'tf_done',
     SET_FILTER_TITLE : 'search/setFilterTitle',
     SET_FILTER_DEDLINE : 'search/setFilterDedline',
     SET_FILTER_DONE : 'search/setFilterDone'
  }
);

const searchListChangeValue = (payload) => ( {type: actions.SEARCH_LIST_CHANGE_VALUE, payload} );
const searchTaskChangeValue = (payload) => ( {type: actions.SEARCH_TASK_CHANGE_VALUE, payload} );
const searchTaskCheckChange = () => ( {type: actions.SEARCH_TASK_CHECK_CHANGE} );
const serchSetFTitle = () => ( {type:actions.SET_FILTER_TITLE} );
const serchSetFDedline = () => ( {type:actions.SET_FILTER_DEDLINE} );
const serchSetFDone = () => ( {type:actions.SET_FILTER_DONE} );


export { 
  actions, 
  searchListChangeValue, 
  searchTaskChangeValue, 
  searchTaskCheckChange,
  serchSetFTitle,
  serchSetFDedline,
  serchSetFDone
};