import { createSlice } from "@reduxjs/toolkit";
import {
	getTasksThunk,
	addTaskThunk,
	deleteTaskThunk,
	updateTaskThunk,
} from "../thunk/taskThunk";

const taskSlice = createSlice({
	name: "tasks",
	initialState: [{ id: "someId", text: "Some Text", completed: true }],
	extraReducers: (builder) => {
		builder
			.addCase(getTasksThunk.fulfilled, (state, action) => {
				return action.payload;
			})
			.addCase(addTaskThunk.fulfilled, (state, action) => {
				console.log(action.payload);
				state.push(action.payload);
			})
			.addCase(deleteTaskThunk.fulfilled, (state, action) => {
				return state.filter((task) => task.id !== action.payload);
			})
			.addCase(updateTaskThunk.fulfilled, (state, action) => {
				const task = state.find((task) => task.id === action.payload.id);
				if (action.payload.text) {
					task.text = action.payload.text;
				} else if (action.payload.completed) {
					task.completed = action.payload.completed;
				}
			});
	},
});

export const { addTodo, editTodo, removeTodo, setCompletedTodo } =
	taskSlice.actions;
export const taskReducer = taskSlice.reducer;
