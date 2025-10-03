import { createAction } from '@reduxjs/toolkit'

export const addTodo = createAction('todo/add', (payload) => ({ payload }))
export const editTodo = createAction('todo/edit', (payload) => ({ payload }))
export const removeTodo = createAction('todo/remove', (payload) => ({
	payload,
}))
export const setCompletedTodo = createAction('todo/completed', (payload) => ({
	payload,
}))
export const updateFilter = createAction('todo/filter/update', (payload) => ({
	payload,
}))
export const updateIsDoneFilter = createAction(
	'todo/filter/isDone',
	(payload) => ({ payload })
)
export const updateIsAllFilter = createAction(
	'todo/filter/isAll',
	(payload) => ({ payload })
)
