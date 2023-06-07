import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const SingleProduct = () => {
	// Zustand für das Produkt-Array initialisieren
	const [product, setProduct] = useState([]);

	// ID-Parameter aus der URL extrahieren
	const { id } = useParams();

	// Effekt-Hook: Daten vom API-Endpunkt abrufen und Produkt-Array aktualisieren
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json()) // JSON-Daten aus der API-Antwort extrahieren
			.then(data => setProduct(data)) // Produkt-Array mit den erhaltenen Daten aktualisieren
			.catch(error => console.log("Fehler: ", error)); // Fehlerbehandlung bei der API-Anfrage
	}, []);

	// Produkt-Detail erstellen: Filtern des Produkt-Arrays nach der ID
	const productDetail = product?.filter(elm => {
		return elm.id.toString() === id;
	});

	return (
		<div>
			{productDetail ? (
				// Wenn ein Produkt gefunden wurde:
				<div>
					<Header />
					<h2>{productDetail[0]?.title}</h2>
					<p>{productDetail[0]?.description}</p>
					{/* Weitere Details des einzelnen Produkts anzeigen */}
				</div>
			) : (
				// Wenn kein Produkt gefunden wurde:
				<p>Produkt nicht gefunden</p>
			)}
		</div>
	);
};

export default SingleProduct;
