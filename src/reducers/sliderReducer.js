//import objectAssign from 'object-assign';

const initialSliderState = {
  isHidden: false,
  ascending: false,
  searchValue: '',
  reports : []

};

export default function sliderReducer(state = initialSliderState, action) {
  const {type, payload} = action;

  switch (type) {
    case 'SLIDER@GET_REPORTS_SUCCESS': {
      const reports = payload;
      return {
        ...state,
        reports: reports
      };
    }

    case 'SLIDER@UPDATE_SEARCH': {
      const searchValue = payload;
      return {
        ...state,
        searchValue: searchValue
      };
    }

    case 'SLIDER@TOGGLE_ORDER': {
      return {
        ...state,
        ascending: !state.ascending,
      };
    }

    case 'SLIDER@CLOSE': {
      return {
        ...state,
        isHidden: true,
      };
    }

    case 'SLIDER@OPEN': {
      return {
        ...state,
        isHidden: false,
      };
    }

    default:
      return state;
  }
}


