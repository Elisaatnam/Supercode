import { Link } from "react-router-dom";
import DarkLight from "../assets/svg/DarkLight";

import { useContext } from "react";
import { Theme } from "../context/Context";

import "./Header.css";

const Header = () => {
	const { theme, setTheme } = useContext(Theme);

	const toggleTheme = () => setTheme(prev => !prev);
	return (
		<header>
			<nav>
				<div className='links'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>

				<div onClick={toggleTheme}>
					<DarkLight />
				</div>
			</nav>
		</header>
	);
};

export default Header;
