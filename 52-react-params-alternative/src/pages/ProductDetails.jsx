import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Nav from "../components/Nav"

const ProductDetails = () => {

    const [detailData, setDetailData] = useState({})
    const params = useParams() // hinter useParams steckt ein Objek
    console.log(params);

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
         // params.productId enthält den Wert der Produkt-ID, der aus der URL entnommen wird. 
        .then((res) => res.json())
        .then((produktData) => { 
            setDetailData(produktData)
            console.log(produktData)
        })
        .catch((error) => {
            console.log("Fehler beim laden", error)
        })
        
    },[])

    return(
        <div>
            <Nav />
            <div className="main-detail">
                <div className="img-grid">
                    <img className="detail-img" src={detailData.image} alt={detailData.title} />
                    <p className="price-tag">€{detailData.price}</p>
                </div>
                
                <div className="detail-info">
                    <h1>{detailData.title}</h1>
                    <p>{detailData.description}</p>
                    
                </div>
            </div>
        
        </div>
    )
}

export default ProductDetails