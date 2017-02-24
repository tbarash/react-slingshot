import {createSelector} from 'reselect';

const getIsHidden = state => state.slider.isHidden;
const getReports = state => state.slider.reports;
const getIsAscending = state => state.slider.ascending;

const getReportsSorted = createSelector(
  getReports,
  getIsAscending,
  (reports, isAscending) => {
    const newReports = [...reports];
    if (isAscending) {
      return [...newReports.sort((a, b) => b.updated - a.updated)];
    } else {
      return [...newReports.sort((a, b) => a.updated - b.updated)];
    }

  }
);

export const getSliderState = state => ({
  reports : getReportsSorted(state),
  isHidden: getIsHidden(state)
});