
import {reduxThunkPromise} from '..//utils/reduxThunkUtils';
import apiService from '../services/apiService';


// // example of a thunk using the redux-thunk middleware
// export function loadReports(settings) {
//   return function (dispatch) {
//     // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
//     // in this case at this point we could call a service that would persist the fuel savings
//     return apiService.getReports().then(
//       return dispatch({
//         type: types.SAVE_FUEL_SAVINGS,
//         dateModified: getFormattedDateTime(),
//         settings
//       });
//     );
//   };
// }

export function loadReports() {
  return reduxThunkPromise('SLIDER@GET_REPORTS', apiService => apiService.getReports());
}

