import { useState } from "react";
import ToDo from "./ToDo";

const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [value, setValue] = useState("");

	const addTodo = () => {
		setTodos(previousTodo => [{ beschreibung: value }, ...previousTodo]);

		setValue();
	};

	return (
		<>
			<input
				onChange={event => setValue(event.target.value)}
				type='text'
				value={value}
			/>
			<button onClick={addTodo}>Add</button>
			{/*  addTodo funktion wird erst nach dem klick
			aufgerufen, dehalb keine () */}

			{todos.map((TODO, index) => (
				<ToDo todo={TODO.beschreibung} key={index} />
			))}
		</>
	);
};

export default ToDoList;
