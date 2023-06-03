import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	function add() {
		setCount(count + 1);
		setCount(count + 5);
		setCount(count + 10);
		setCount(prev => prev + 5);
	}

	function sub() {
		setCount(count - 1);
	}

	return (
		<>
			<button onClick={add}>Plus</button>
			<div>{count}</div>
			<button onClick={sub}>Minus</button>
		</>
	);
};

export default Counter;
