import ProductSlider from "./ProductSlider";
import ProductGrid from "./ProductGrid";
import CategoryFilter from "./CategoryFilter";
import ProductModal from "./ProductModal";

import { getProducts } from "../mock/asyncData";
import { useDestacados } from "../hooks/useDestacados";
import { useProductos } from "../hooks/useProductos";
import { filterProducts } from "../helpers/filterProducts";
import { useParams } from "react-router-dom";
import { useState } from "react";

function ItemListContainer({ busqueda }) {

    const { categoria = "todos" } = useParams();
    const { destacados, loading, error } = useDestacados(categoria);
    const { productos } = useProductos(categoria);
    const [showModal, setShowModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const abrirModal = (producto) => {
        setProductoSeleccionado(producto);
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container mt-4">
            <CategoryFilter
                categorias={[
                    "todos",
                    "celulares",
                    "computadoras",
                    "accesorios"
                ]}
                active={categoria}
            />

            <h2 className="mb-3 text-warning">
                🔥 Destacados
            </h2>

            {loading && <h5>Cargando...</h5>}

            {error && (
                <h5 className="text-danger">
                    Error al cargar productos
                </h5>
            )}

            <ProductSlider
                productos={filterProducts(
                    destacados,
                    busqueda
                )}
            />

            <h2 className="mt-5">
                📱 Catálogo
            </h2>

            <ProductGrid
                productos={filterProducts(
                    productos,
                    busqueda
                )}
                abrirModal={abrirModal}
            />

            <ProductModal
                show={showModal}
                handleClose={cerrarModal}
                producto={productoSeleccionado}
            />

        </div>
    );
}

export default ItemListContainer;