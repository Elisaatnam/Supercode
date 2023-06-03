import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const add = () => setCount(count + 1);

	const sub = () => setCount(count - 1);

	const reset = () => setCount(0);

	return (
		<>
			<button onClick={add}>+</button>
			<div>{count}</div>
			<button onClick={sub}>-</button>
			<br />
			<button onClick={reset}>Reset</button>
		</>
	);
};

export default Counter;
