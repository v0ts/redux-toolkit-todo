import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const taskSlice = createSlice({
	name: 'tasks',
	initialState: [{ id: 'someId', text: 'Some Text', completed: true }],
	reducers: {
		addTodo: {
			reducer(state, action) {
				state.push(action.payload)
			},
			prepare(text) {
				return {
					payload: {
						text,
						id: uuid(),
						completed: false,
					},
				}
			},
		},
		editTodo: {
			reducer(state, action) {
				state.find((task) => task.id === action.payload.id).text =
					action.payload.text
			},
		},
		removeTodo: {
			reducer(state, action) {
				state = state.filter((task) => task.id !== action.payload)
			},
		},
		setCompletedTodo: {
			reducer(state, action) {
				const task = state.find((task) => task.id === action.payload)
				task.completed = !task.completed
			},
		},
	},
})

export const { addTodo, editTodo, removeTodo, setCompletedTodo } =
	taskSlice.actions
export const taskReducer = taskSlice.reducer
