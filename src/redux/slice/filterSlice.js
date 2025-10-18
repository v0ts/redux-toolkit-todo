import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		text: "",
		isDone: false,
	},
	reducers: {
		updateFilter: {
			reducer(state, action) {
				state.text = action.payload;
			},
		},
		updateIsDoneFilter: {
			reducer(state, action) {
				state.isDone = action.payload;
			},
		},
	},
});

export const { updateFilter, updateIsDoneFilter, updateIsAllFilter } =
	filterSlice.actions;
export const filterReducer = filterSlice.reducer;
