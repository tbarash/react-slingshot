//import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialSliderState = {
  counter: 15,
  counter1: 20,
  reports : []

};

export default function fuelSavingsReducer(state = initialSliderState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'SLIDER@GET_REPORTS_SUCCESS': {
      debugger
      const reports = payload;
      //const sortedStyles  = stylesOrder.map(styleName => styles.find(style => style.id === styleName))

      return {
        ...state,
        reports: reports
      };
    }

    default:
      return state;
  }
}


