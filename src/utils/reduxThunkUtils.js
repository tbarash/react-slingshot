
export function reduxThunkPromise(baseName, fn, payload){
  return (dispatch, getState, {apiService}) => {
    dispatch({type: `${baseName}_LOADING`, payload});

    return fn(apiService).then(
      response => dispatch({type: `${baseName}_SUCCESS`, payload: response}),
      error => dispatch({type: `${baseName}_FAILURE`, payload: error}));
  };
}

export function reduxStateAwareAction(actionCreator) {
  return (dispatch, getState) => dispatch(actionCreator(getState()));
}
