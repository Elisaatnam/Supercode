import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<h1>AmaSuperzon</h1>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/service'>Service</Link>
				<Link to='/contact'>Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
