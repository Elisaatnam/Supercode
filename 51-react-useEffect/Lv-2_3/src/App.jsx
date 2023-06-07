import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import SingleCarDetail from "./pages/SingleCarDetail";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:superCar' element={<SingleCarDetail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
