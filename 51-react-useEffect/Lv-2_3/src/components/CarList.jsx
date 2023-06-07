import { Link } from "react-router-dom";
import Cars from "../Data/Cars.json";

const CarList = () => {
	return (
		<section className='grid'>
			{Cars.map((elm, index) => {
				return (
					<article key={index} className='grid-item'>
						<h2>{elm.CarMake}</h2>
						<Link to={`/${elm.id}`}>Show more</Link>
					</article>
				);
			})}
		</section>
	);
};

export default CarList;
