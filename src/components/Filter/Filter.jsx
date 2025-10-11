import { useDispatch } from 'react-redux'
import style from './Filter.module.css'
import { updateFilter } from '../../redux/filterSlice'

export const Filter = () => {
	const dispatch = useDispatch()

	const handleFilter = () => {
		const input = document.getElementById('filter')

		dispatch(updateFilter(input.value.trim()))
	}

	return (
		<input
			type='text'
			name='filter'
			id='filter'
			className={style.input}
			placeholder='Filter Todo'
			onChange={handleFilter}
		/>
	)
}
