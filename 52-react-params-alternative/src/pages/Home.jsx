import React, { useEffect, useState } from 'react'
import ProduktKarte from '../components/ProduktKarte'
import { Link } from 'react-router-dom'

const Home = () => {

    const [data, setData] = useState()
    // const [data, setData] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) =>{
            setData(data)
            console.log(data);
        })
        .catch((err) =>{
            console.log("Fehler", err);
        })
    },[])

    return (
        <div>
            <h1>Willkommen</h1>
            <div className="flex-grid">
            {data?.map((item, i) => (
                <div key={i}>
                    <ProduktKarte
                        img={item.image}
                        description={item.title}
                        price={item.price}
                    />
                    <Link to={`/product/${item.id}`}>Show more</Link>

                </div>
            ))}

            </div>
        </div>
    )
}

export default Home