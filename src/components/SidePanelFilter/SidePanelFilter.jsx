import style from "./SidePanelFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateIsDoneFilter } from "../../redux/slice/filterSlice";
import { selectFilterDone } from "../../redux/selectors/filterSelector";

export const SidePanelFilter = () => {
	const isDone = useSelector(selectFilterDone);
	const dispatch = useDispatch();

	const handleIsDoneFilter = () => {
		dispatch(updateIsDoneFilter(document.getElementById("isDone").checked));
	};

	return (
		<section className={style.section}>
			<ul className={style.list}>
				<li className={style.item}>
					{isDone ? (
						<input
							className={style.input}
							type="checkbox"
							name="isDone"
							id="isDone"
							defaultChecked
							onClick={handleIsDoneFilter}
						/>
					) : (
						<input
							className={style.input}
							type="checkbox"
							name="isDone"
							id="isDone"
							onClick={handleIsDoneFilter}
						/>
					)}

					<label className={style.label} htmlFor="isDone">
						is done
					</label>
				</li>
			</ul>
		</section>
	);
};
