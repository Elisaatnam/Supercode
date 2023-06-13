import Header from "../components/Header";
import { LoadingAnimation } from "../context/Context";
import { useContext, useEffect } from "react";
import Loader from "../assets/svg/Loader.jsx";

const Home = () => {
	const { loading, setLoading } = useContext(LoadingAnimation);

	useEffect(() => {
		setTimeout(() => setLoading(false), 4000);
	}, []);

	return (
		<>
			{loading ? (
				<>
					{/* <img src='../src/assets/gif/colorfulLoader.gif' alt='' /> */}
					<Loader />
				</>
			) : (
				<>
					<Header />
					<h1>Home</h1>
				</>
			)}
		</>
	);
};

export default Home;
