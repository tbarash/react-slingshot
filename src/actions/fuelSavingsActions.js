import {reduxThunkPromise} from '../utils/reduxThunkUtils'


export function loadReports() {
  debugger
  return reduxThunkPromise('SLIDER@GET_REPORTS', apiService => apiService.getReports());
}

