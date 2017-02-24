import {createSelector} from 'reselect';

const getIsOpen = state => state.slider.open == 1;
const getReports = state => state.slider.reports;
const getIsAscending = state => state.slider.ascending === true;

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
  isOpen: getIsOpen(state),
  reports : getReportsSorted(state),
});