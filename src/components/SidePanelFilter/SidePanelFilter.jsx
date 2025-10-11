import style from './SidePanelFilter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateIsDoneFilter, updateIsAllFilter } from '../../redux/filterSlice'

export const SidePanelFilter = () => {
	const isDone = useSelector((state) => state.filter.isDone)
	const isAll = useSelector((state) => state.filter.isAll)
	const dispatch = useDispatch()

	const handleIsDoneFilter = () => {
		dispatch(updateIsDoneFilter(document.getElementById('isDone').checked))
	}

	const handleIsAllFilter = () => {
		dispatch(updateIsAllFilter(document.getElementById('isAll').checked))
	}

	return (
		<section className={style.section}>
			<ul className={style.list}>
				<li className={style.item}>
					{isDone ? (
						<input
							className={style.input}
							type='checkbox'
							name='isDone'
							id='isDone'
							defaultChecked
							onClick={handleIsDoneFilter}
						/>
					) : (
						<input
							className={style.input}
							type='checkbox'
							name='isDone'
							id='isDone'
							onClick={handleIsDoneFilter}
						/>
					)}

					<label className={style.label} htmlFor='isDone'>
						is done
					</label>
				</li>
				<li className={style.item}>
					{isAll ? (
						<input
							className={style.input}
							type='checkbox'
							name='isAll'
							id='isAll'
							defaultChecked
							onClick={handleIsAllFilter}
						/>
					) : (
						<input
							className={style.input}
							type='checkbox'
							name='isAll'
							id='isAll'
							onClick={handleIsAllFilter}
						/>
					)}

					<label className={style.label} htmlFor='isAll'>
						is all
					</label>
				</li>
			</ul>
		</section>
	)
}
