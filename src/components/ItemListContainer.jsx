import { useEffect, useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { getProducts } from "../mock/asyncData";
import CategoryFilter from "./CategoryFilter";

const ItemListContainer = ({ categoria, setCategoria }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((respuesta) => {
                setProductos(respuesta);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // ✅ categorías dinámicas
    const categorias = ["todos", ...new Set(productos.map(p => p.categoria))];

    // ✅ filtrado correcto
    const productosFiltrados = useMemo(() => {
        return categoria === "todos"
            ? productos
            : productos.filter(prod => prod.categoria === categoria);
    }, [productos, categoria]);

    if (loading) return <Loading />;

    return (
        <div className="container">

            {/* 🔥 Filtro conectado al estado global */}
            <CategoryFilter
                categorias={categorias}
                onSelect={setCategoria}
                active={categoria}
            />

            {/* Productos */}
            <div className="row">
                {productosFiltrados.map((prod) => (
                    <div className="col-md-4 mb-4" key={prod.id}>
                        <ProductCard
                            titulo={prod.titulo}
                            imagen={prod.imagen}
                            descripcion={prod.descripcion}
                            precio={prod.precio}
                            boton="Agregar al carrito"
                        />
                    </div>
                ))}

                {productosFiltrados.length === 0 && (
                    <p className="text-center">No hay productos</p>
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;