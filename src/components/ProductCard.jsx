import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ id, titulo, imagen, descripcion, precio }) => {

    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleNavigate = () => {
        navigate(`/producto/${id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation(); // evita que dispare el click de la card
        addToCart({ id, titulo, precio, imagen });
    };

    return (
        <div
            className="card h-100 border-0"
            style={{
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}
            onClick={handleNavigate}
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

                <h5 className="card-title fw-bold">{titulo}</h5>

                <p
                    className="card-text text-muted"
                    style={{
                        fontSize: "0.9rem",
                        minHeight: "60px"
                    }}
                >
                    {descripcion}
                </p>

                <h4 className="mt-auto fw-bold text-dark">
                    ${precio?.toLocaleString()}
                </h4>

                {/* BOTÓN AGREGAR */}
                <button
                    onClick={() =>
                        addToCart({
                            id,
                            titulo,
                            precio,
                            imagen
                        })
                    }
                >
                    Agregar al carrito
                </button>

                {/* BOTÓN DETALLE */}
                <button
                    className="btn btn-outline-dark mt-2 w-100"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate();
                    }}
                >
                    Ver detalle
                </button>
            </div>
        </div>
    );
};

export default ProductCard;