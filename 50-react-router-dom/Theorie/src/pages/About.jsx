import Nav from "../components/Nav";

const About = props => {
	return (
		<>
			<Nav />
			<h1>About</h1>
			<p>{props.pizza}</p>
		</>
	);
};

export default About;
