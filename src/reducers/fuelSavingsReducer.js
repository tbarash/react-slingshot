import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import calculator from '../utils/fuelSavingsCalculator';
import objectAssign from 'object-assign';

const initialSliderState = {
  counter: 15,
  counter1: 20,

};

export default function fuelSavingsReducer(state = initialSliderState, action) {
  let newState;

  switch (action.type) {
    case SAVE_FUEL_SAVINGS:
      return objectAssign({}, state, {dateModified: action.dateModified});

    case CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.savings = calculator().calculateSavings(newState);
      }

      return newState;

    default:
      return state;
  }
}


