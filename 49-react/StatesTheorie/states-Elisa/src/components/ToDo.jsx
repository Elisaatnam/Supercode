import { useState } from "react";

const ToDo = props => {
	const [done, setDone] = useState(false);

	/* function erledigt() {
		setDone(true);
	} */

	return (
		<div
			onClick={() => setDone(true)}
			style={done ? { textDecoration: "line-through" } : {}}
		>
			{props.todo}
		</div>

		/* <div
			onClick={erledigt}
			style={done ? { textDecoration: "underline" } : {}}
		>
			(props.todo)
		</div> */
	);
};

export default ToDo;
