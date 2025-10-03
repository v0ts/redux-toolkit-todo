import { createReducer } from '@reduxjs/toolkit'
import {
	addTodo,
	editTodo,
	removeTodo,
	setCompletedTodo,
	updateFilter,
	updateIsAllFilter,
	updateIsDoneFilter,
} from './actions'
import { v4 as uuid } from 'uuid'

const initialState = {
	todo: [{ id: 'someId', text: 'Some Text', completed: true }],
	filter: {
		text: '',
		isDone: false,
		isAll: true,
	},
}

export const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(addTodo, (state, action) => {
			state.todo.push({ id: uuid(), text: action.payload, completed: false })
		})
		.addCase(editTodo, (state, action) => {
			const indexTodo = state.todo.findIndex(
				(item) => item.id === action.payload.id
			)

			state.todo = [
				...state.todo.filter((item) => item.id !== action.payload.id),
				{
					...state.todo[indexTodo],
					text: action.payload.text,
				},
			]
		})
		.addCase(removeTodo, (state, action) => {
			state.todo = state.todo.filter((task) => task.id !== action.payload)
		})
		.addCase(setCompletedTodo, (state, action) => {
			state.todo = state.todo.map((task) =>
				task.id === action.payload
					? { ...task, completed: !task.completed }
					: task
			)
		})
		.addCase(updateFilter, (state, action) => {
			state.filter.text = action.payload
		})
		.addCase(updateIsDoneFilter, (state, action) => {
			state.filter.isDone = action.payload
		})
		.addCase(updateIsAllFilter, (state, action) => {
			state.filter.isAll = action.payload
		})
})
