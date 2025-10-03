import style from './SidePanel.module.css'
import { SidePanelFilter } from '../SidePanelFilter/SidePanelFilter.jsx'
import { Filter } from '../Filter/Filter.jsx'
import { TodoList } from '../TodoList/TodoList.jsx'

export const SidePanel = () => {
	return (
		<section className={style.section}>
			<aside className={style.aside}>
				<Filter />
				<div className={style.line}></div>
				<SidePanelFilter />
			</aside>
			<div className={style.div}>
				<TodoList />
			</div>
		</section>
	)
}
