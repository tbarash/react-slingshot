//import objectAssign from 'object-assign';

const initialSliderState = {
  open: 0,
  ascending: false,
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

    case 'SLIDER@TOGGLE_ORDER': {
      return {
        ...state,
        ascending: !state.ascending,
      };
    }

    default:
      return state;
  }
}


