import {createSelector} from 'reselect';

const getIsHidden = state => state.slider.isHidden;
const getReports = state => state.slider.reports;
const getIsAscending = state => state.slider.ascending;
const getsearchValue = state => state.slider.searchValue;


const getReportsSorted = createSelector(
  getReports,
  getIsAscending,
  getsearchValue,
  (reports, isAscending, searchQuery) => {
    const newReports = [...reports];

    if (searchQuery.value) {
      const result = [...newReports].filter(report => report.name.toLowerCase().includes(searchQuery.value));
      return result;
    }

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