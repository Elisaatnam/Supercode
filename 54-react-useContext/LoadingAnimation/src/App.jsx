import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import { Theme } from "./context/Context";
import { LoadingAnimation } from "./context/Context";

function App() {
	const [theme, setTheme] = useState(false);
	const [loading, setLoading] = useState(true);
	return (
		<div className={theme ? "dark wrapper" : "wrapper"}>
			<LoadingAnimation.Provider value={{ loading, setLoading }}>
				<Theme.Provider value={{ theme, setTheme }}>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact />} />
						</Routes>
					</BrowserRouter>
				</Theme.Provider>
			</LoadingAnimation.Provider>
		</div>
	);
}

export default App;
