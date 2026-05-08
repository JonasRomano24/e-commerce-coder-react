import ProductSlider from "./ProductSlider";
import ProductGrid from "./ProductGrid";
import CategoryFilter from "./CategoryFilter";

import { getProducts } from "../mock/asyncData";
import { useDestacados } from "../hooks/useDestacados";
import { useProductos } from "../hooks/useProductos";
import { filterProducts } from "../helpers/filterProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ busqueda }) {

    const { categoria = "todos" } = useParams();
    const { destacados, loading, error } = useDestacados(categoria);
    const { productos } = useProductos(categoria);

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
            />

        </div>
    );
}

export default ItemListContainer;