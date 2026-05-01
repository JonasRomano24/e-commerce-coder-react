const ProductCard = ({ titulo, imagen, descripcion, precio, boton }) => {
    return (
        <div
            className="card h-100 border-0"
            style={{
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
            }}
        >
            <img
                src={imagen}
                className="card-img-top"
                alt={titulo}
                style={{
                    height: "200px",
                    objectFit: "cover"
                }}
            />

            <div className="card-body d-flex flex-column">

                {/* Título */}
                <h5 className="card-title fw-bold">{titulo}</h5>

                {/* Descripción */}
                <p
                    className="card-text text-muted"
                    style={{
                        fontSize: "0.9rem",
                        minHeight: "60px"
                    }}
                >
                    {descripcion}
                </p>

                {/* Precio */}
                <h4 className="mt-auto fw-bold text-dark">
                    ${precio.toLocaleString()}
                </h4>

                {/* Botón */}
                <button
                    className="btn btn-dark mt-3 w-100"
                    style={{
                        transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.opacity = "1";
                    }}
                >
                    {boton}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;