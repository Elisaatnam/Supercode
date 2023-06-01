import Button from "./Button";

const SingleProduct = props => {
	return (
		<div>
			<img src={props.produkt.image} alt='' />
			<h2>{props.produkt.name}</h2>
			<p>{props.produkt.preis}</p>
			<Button />
		</div>
	);
};

export default SingleProduct;
