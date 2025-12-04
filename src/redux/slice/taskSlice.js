import { createSlice } from "@reduxjs/toolkit";
import {
	getTasksThunk,
	addTaskThunk,
	deleteTaskThunk,
	updateTaskThunk,
} from "../thunk/taskThunk";

const taskSlice = createSlice({
	name: "tasks",
	initialState: {
		items: [],
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTasksThunk.fulfilled, (state, action) => {
				state.items = action.payload || [];
				state.isError = false;
				state.isLoading = false;
			})
			.addCase(getTasksThunk.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(getTasksThunk.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
			})
			.addCase(addTaskThunk.fulfilled, (state, action) => {
				state.items.push(action.payload);
				state.isError = false;
				state.isLoading = false;
			})
			.addCase(addTaskThunk.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(addTaskThunk.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
			})
			.addCase(deleteTaskThunk.fulfilled, (state, action) => {
				state.items = state.items.filter((task) => task.id !== action.payload);
				state.isError = false;
				state.isLoading = false;
			})
			.addCase(deleteTaskThunk.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(deleteTaskThunk.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
			})
			.addCase(updateTaskThunk.fulfilled, (state, action) => {
				const task = state.items.find((task) => task.id === action.payload.id);
				if (action.payload.text) {
					task.text = action.payload.text;
				} else if (action.payload.completed) {
					task.completed = action.payload.completed;
				}

				state.isError = false;
				state.isLoading = false;
			})
			.addCase(updateTaskThunk.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(updateTaskThunk.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
			});
	},
});

export const taskReducer = taskSlice.reducer;
