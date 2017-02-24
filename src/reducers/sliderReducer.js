//import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
//import objectAssign from 'object-assign';

const initialSliderState = {
  counter: 15,
  reports : []

};

export default function sliderReducer(state = initialSliderState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'SLIDER@GET_REPORTS_SUCCESS': {
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


