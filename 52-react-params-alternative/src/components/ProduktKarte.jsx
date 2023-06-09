

const ProduktKarte = (props) => {
    return (
        <div className="produktKarte">
            <div className="zoom-container">
                <img className="cover" src={props.img} alt={props.title} />
            </div>
            <div>
                <p>{props.description}</p>
                <p>{props.price} € </p>
            </div>
        </div>
    )
}

export default ProduktKarte