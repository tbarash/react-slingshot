//import {createSelector} from 'reselect'

const getCounter = state => state.slider.counter;
const getReports = state => state.slider.reports;

export {getCounter};

export const getSliderState = state => ({
  counter: getCounter(state),
  reports : getReports(state),
});