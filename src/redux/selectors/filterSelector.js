const selectFilterText = (state) => state.filter.text;
const selectFilterDone = (state) => state.filter.isDone;
const selectAllFilters = (state) => state.filter;

export { selectFilterText, selectFilterDone, selectAllFilters };
