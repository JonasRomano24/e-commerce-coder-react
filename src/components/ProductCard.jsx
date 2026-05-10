import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({
    id,
    titulo,
    imagen,
    descripcion,
    precio,
    abrirModal
}) => {

    const navigate = useNavigate();
    const { addToCart } = useCart();
    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({ id, titulo, precio, imagen });
    };

    return (
        <div
            className="card h-100 border-0"
            style={{
                transition: "all 0.3s ease",
                cursor: "pointer"
            }}

            // 🔥 CLICK PRINCIPAL = ABRIR MODAL
            onClick={() =>
                abrirModal({
                    id,
                    titulo,
                    imagen,
                    descripcion,
                    precio
                })
            }

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
                    style={{ fontSize: "0.9rem", minHeight: "60px" }}
                >
                    {descripcion}
                </p>

                <h4 className="mt-auto fw-bold text-dark">
                    ${precio?.toLocaleString()}
                </h4>

                {/* 🛒 AGREGAR AL CARRITO */}
                <button
                    className="btn btn-dark mt-2 w-100"
                    onClick={handleAddToCart}
                >
                    Agregar al carrito
                </button>

                {/* 🔎 VER DETALLE (NAVEGACIÓN) */}
                <button
                    className="btn btn-outline-dark mt-2 w-100"
                    onClick={(e) => {
                        e.stopPropagation();
                        abrirModal({
                            id,
                            titulo,
                            imagen,
                            descripcion,
                            precio
                        });
                    }}
                >
                    Ver detalle
                </button>

            </div>
        </div>
    );
};

export default ProductCard;