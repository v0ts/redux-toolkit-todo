import { useDispatch, useSelector } from "react-redux";
import style from "./TodoList.module.css";
import {
	deleteTaskThunk,
	updateTaskThunk,
	getTasksThunk,
} from "../../redux/thunk/taskThunk";
import { useEffect } from "react";

export const TodoList = () => {
	const filter = useSelector((state) => state.filter);
	const todos = useSelector((state) => state.tasks);
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

	useEffect(() => {
		dispatch(getTasksThunk());
	}, [dispatch]);

	const handleDelClick = (id) => {
		dispatch(deleteTaskThunk(id));
	};

	const handleUpdateClick = ({ id, text, completed }) => {	
		const deployObject = {
			id,
		};

		if (text !== undefined) {
			deployObject.text = text;
		} else if (completed !== undefined) {
			deployObject.completed = completed;
		}

		dispatch(updateTaskThunk(deployObject));
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
									onChange={() =>
										handleUpdateClick({
											id: item.id,
											completed: !item.completed,
										})
									}
								/>
							) : (
								<input
									type="checkbox"
									name="completed"
									id="completed"
									className={style.checkbox}
									onChange={() =>
										handleUpdateClick({
											id: item.id,
											completed: !item.completed,
										})
									}
								/>
							)}

							<input
								className={style.text}
								type="text"
								name="cardText"
								id="cardText"
								defaultValue={item.text}
								onBlur={(e) =>
									handleUpdateClick({ id: item.id, text: e.target.value })
								}
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
