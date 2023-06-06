import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<nav>
			<div>
				<p>My Life</p>
			</div>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/blog'>Blog</Link>
			</div>
		</nav>
	);
};

export default Nav;
