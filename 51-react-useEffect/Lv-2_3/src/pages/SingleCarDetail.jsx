import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Cars from "../Data/Cars.json";

const SingleCarDetail = () => {
	const idParams = useParams();

	const detailCar = Cars.filter(elm => {
		return elm.id.toString() === idParams.superCar;
	});

	console.log({ detailCar });

	return (
		<section>
			<Header />
			<h2>{detailCar[0].CarMake}</h2>
			<h2>{detailCar[0].carModel}</h2>
			<h2>{detailCar[0].CarYear}</h2>
		</section>
	);
};

export default SingleCarDetail;
