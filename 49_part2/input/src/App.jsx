import { useState } from "react";
import "./App.css";

function App() {
	const [vorname, setVorname] = useState("");
	const [nachname, setNachname] = useState("");
	const [email, setEmail] = useState("");

	return (
		<>
			<input onChange={event => setVorname(event.target.value)} type='text' />
			<input onChange={event => setNachname(event.target.value)} type='text' />
			<input onChange={event => setEmail(event.target.value)} type='text' />
			<p>Vorname: {vorname}</p>
			<p>Nachname: {nachname}</p>
			<p>Email: {email}</p>
		</>
	);
}

export default App;
