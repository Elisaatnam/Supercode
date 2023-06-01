import ListItem from "./ListItem";

const Main = () => {
	const toDos = [
		"Finish reading a book",
		"Go grocery shopping",
		"Write a blog post",
		"Call a friend",
		"Go for a run",
		"Organize the closet",
		"Attend a yoga class",
		"Plan a weekend getaway",
		"Start a new hobby",
		"Volunteer at a local shelter",
	];

	return (
		<>
			<h1>Meine To Do's</h1>
			<ul>
				{toDos.map((toDoItem, index) => (
					<ListItem todo={toDoItem} key={index} />
				))}
			</ul>
		</>
	);
};

export default Main;
