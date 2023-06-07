import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductOverview = () => {
	const [productData, setProductData] = useState();

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(productData => setProductData(productData))
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			{productData ? (
				<section>
					{productData.map((elm, index) => (
						<article key={index}>
							<img src={elm.image} alt='' />
							<h2>{elm.title}</h2>
							<p>{elm.price}$</p>
							<Link to={`/product/${elm.id}`}>Show more</Link>
						</article>
					))}
				</section>
			) : (
				<p>Daten werden geladen...</p>
			)}
		</>
	);
};

export default ProductOverview;
