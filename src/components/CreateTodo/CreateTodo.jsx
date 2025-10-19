import { useDispatch } from "react-redux";
import style from "./CreateTodo.module.css";
import { addTaskThunk } from "../../redux/thunk/taskThunk";
import { v4 as uuid } from "uuid";

export const CreateTodo = () => {
	const dispatch = useDispatch();

	const handleAddClick = () => {
		const input = document.getElementById("todoText");

		if (input.value.trim() === "") {
			input.classList.add(style.wrong);
			return;
		}

		dispatch(addTaskThunk({ id: uuid(), text: input.value, completed: false }));

		input.value = "";

		if (input.classList.contains(style.wrong)) {
			input.classList.remove(style.wrong);
		}
	};

	return (
		<section className={style.section}>
			<input
				className={style.input}
				type="text"
				name="todoText"
				id="todoText"
				placeholder="Add Todo"
			/>

			<button onClick={handleAddClick} type="button" className={style.button}>
				Add
			</button>
		</section>
	);
};
