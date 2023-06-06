import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Home pizza='Hallo ich sthe in App.jsx und nun in der Home Seite' />
						}
					/>
					<Route
						path='/contact'
						element={
							<Contact pizza='Huhuuuuu ich sthe in App.jsx und nun in der Contact Seite' />
						}
					/>
					<Route
						path='/about'
						element={
							<About pizza='Namaste ich sthe in App.jsx und nun in der AboutSeite' />
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
