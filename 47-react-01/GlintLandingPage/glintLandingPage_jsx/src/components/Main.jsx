import "./Main.css";
import RecipeSec from "./RecipeSec";
import WhatWeDoSec from "./WhatWeDoSec";

const Main = () => {
	return (
		<main>
			<p className='green-p'>What We Do</p>
			<h3>We've got everything you need to launch and grow your business</h3>
			<WhatWeDoSec />
			<RecipeSec />
		</main>
	);
};

export default Main;
