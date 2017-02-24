
import apiService from '../services/apiService';


export function loadReports() {
  return function (dispatch) {
    return apiService.getReports().then(
      payload => dispatch(loadReports_success(payload))
    );
  };
}

function loadReports_success(payload) {
  return {
    type: 'SLIDER@GET_REPORTS_SUCCESS',
    payload
  };
}
