const selectTasks = (state) => state.tasks.items;
const selectError = (state) => state.tasks.isError;
const selectLoading = (state) => state.tasks.isLoading;

export { selectTasks, selectError, selectLoading };