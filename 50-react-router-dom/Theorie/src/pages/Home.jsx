import Nav from "../components/Nav";

const Home = props => {
	return (
		<>
			<Nav />
			<h1>Home</h1>
			<p>{props.pizza}</p>
		</>
	);
};

export default Home;
