import React from "react";

const ProductCard = (props) => {

    const { titulo, imagen, descripcion, precio, boton } = props;

    return (
        <div className="card h-100 shadow-sm">
            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{titulo}</h5>

                <p className="card-text">{descripcion}</p>

                <h6 className="mt-auto">${precio}</h6>

                <button className="btn btn-primary mt-3">
                    {boton}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;