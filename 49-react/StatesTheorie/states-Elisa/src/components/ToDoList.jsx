import { useState } from "react";
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";

const ToDoList = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div className='list'>
			{todos.map((todo, index) => (
				<ToDo todo={todo.beschreibung} key={index} />
			))}
			<AddToDo add={setTodos} />
		</div>
	);
};

export default ToDoList;
