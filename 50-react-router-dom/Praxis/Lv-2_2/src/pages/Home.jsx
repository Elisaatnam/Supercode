import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./Home.css";

const Home = () => {
	return (
		<header>
			<div className='nav-bg'>
				<Nav />
			</div>

			<h1>Home</h1>
			<h2>Welcome to my simple Blog</h2>
			<Link to='/blog'>
				<button>Go to articles</button>
			</Link>
		</header>
	);
};

export default Home;
