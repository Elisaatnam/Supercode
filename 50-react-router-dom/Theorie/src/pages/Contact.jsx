import Nav from "../components/Nav";

const Contact = props => {
	return (
		<>
			<Nav />
			<h1>Contact</h1>
			<p>{props.pizza}</p>
		</>
	);
};

export default Contact;
