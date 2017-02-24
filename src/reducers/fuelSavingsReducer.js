//import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import objectAssign from 'object-assign';

const initialSliderState = {
  counter: 15,
  counter1: 20,
  reports : []

};

export default function fuelSavingsReducer(state = initialSliderState, action) {
  let newState;

  switch (action.type) {
    case 'blabla':
      return objectAssign({}, state, {dateModified: action.dateModified});

    case '123':
      // newState = objectAssign({}, state);
      // newState[action.fieldName] = action.value;
      // newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
      // newState.dateModified = action.dateModified;
      //
      // if (newState.necessaryDataIsProvidedToCalculateSavings) {
      //   newState.savings = calculator().calculateSavings(newState);
      // }

      return newState;

    default:
      return state;
  }
}


