import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		text: '',
		isDone: false,
		isAll: true,
	},
	reducers: { 
		updateFilter: { 
			reducer(state, action) { 
				state.text = action.payload
			}
		}, 
		updateIsDoneFilter: { 
			reducer(state, action) { 
				state.isDone = action.payload
			}
		}, 
		updateIsAllFilter: { 
			reducer(state, action) { 
				state.isAll = action.payload
			}
		}
	}
})

export const {updateFilter, updateIsDoneFilter, updateIsAllFilter} = filterSlice.actions
export const filterReducer = filterSlice.reducer
