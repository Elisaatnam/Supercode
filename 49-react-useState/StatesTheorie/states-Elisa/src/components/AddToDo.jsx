import { useState } from "react";

const AddToDo = props => {
	const [value, setValue] = useState("");
	return (
		<>
			<input onChange={event => setValue(event.target.value)} type='text' />
			<button
				onClick={() => props.add(prev => [{ beschreibung: value }, ...prev])}
			>
				Add
			</button>
		</>
	);
};

export default AddToDo;
