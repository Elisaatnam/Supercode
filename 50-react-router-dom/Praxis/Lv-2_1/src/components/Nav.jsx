import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

const NavBar = props => {
	const [color, setColor] = useState(false);
	const [color2, setColor2] = useState(false);
	const [color3, setColor3] = useState(false);
	const [color4, setColor4] = useState(false);
	// console.log(props);
	const clicked = () => {
		setColor(!color);
	};
	const clicked2 = () => {
		setColor2(!color2);
	};
	const clicked3 = () => {
		setColor3(!color3);
	};
	const clicked4 = () => {
		setColor4(!color4);
	};

	return (
		<nav>
			<NavLink to='/'>Kim's Café</NavLink>
			<Link
				to='/speisekarte'
				onClick={clicked}
				style={{ background: color ? "palevioletred" : "aqua" }}
			>
				Speisekarte
			</Link>
			<Link
				to='/kontakt'
				onClick={clicked2}
				style={{ background: color2 ? "palevioletred" : "aqua" }}
			>
				Kontakt
			</Link>
			<Link
				to='/oeffungszeiten'
				onClick={clicked3}
				style={{ background: color3 ? "palevioletred" : "aqua" }}
			>
				Öffnungszeiten
			</Link>
			<Link
				to='/galerie'
				onClick={clicked4}
				style={{ background: color4 ? "palevioletred" : "aqua" }}
			>
				Galerie
			</Link>
		</nav>
	);
};

export default NavBar;
