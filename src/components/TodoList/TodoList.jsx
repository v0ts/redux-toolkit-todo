import { useDispatch, useSelector } from "react-redux";
import style from "./TodoList.module.css";
import {
	setCompletedTodo,
	removeTodo,
	editTodo,
} from "../../redux/slice/taskSlice";

export const TodoList = () => {
	const state = useSelector((state) => state);
	const todos = state.tasks;
	const filter = state.filter;
	const dispatch = useDispatch();

	let filteredTodos =
		filter.text !== ""
			? todos.filter((item) =>
					item.text.toLowerCase().includes(filter.text.toLowerCase()),
				)
			: todos;

	filteredTodos = filter.isDone
		? [...filteredTodos].sort((a, b) => a.completed - b.completed)
		: [...filteredTodos].sort((a, b) => b.completed - a.completed);

	const handleDelClick = (id) => {
		dispatch(removeTodo(id));
	};

	const handleTick = (id) => {
		dispatch(setCompletedTodo(id));
	};

	const handleInputChange = (id, text) => {
		dispatch(editTodo({ id, text }));
	};

	return (
		<section>
			<ul className={style.list}>
				{filteredTodos.length > 0 ? (
					filteredTodos.map((item) => (
						<li className={style.item} key={item.id}>
							{item.completed ? (
								<input
									type="checkbox"
									name="completed"
									id="completed"
									className={style.checkbox}
									defaultChecked
									onChange={() => handleTick(item.id)}
								/>
							) : (
								<input
									type="checkbox"
									name="completed"
									id="completed"
									className={style.checkbox}
									onChange={() => handleTick(item.id)}
								/>
							)}

							<input
								className={style.text}
								type="text"
								name="cardText"
								id="cardText"
								defaultValue={item.text}
								onBlur={(e) => handleInputChange(item.id, e.target.value)}
							/>
							<ul className={style.buttonList}>
								<li className={style.buttonItem}>
									<button
										onClick={() => handleDelClick(item.id)}
										type="button"
										className={style.close}
									>
										Del
									</button>
								</li>
							</ul>
						</li>
					))
				) : (
					<p>No todos found</p>
				)}
			</ul>
		</section>
	);
};
