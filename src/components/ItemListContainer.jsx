import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { getProducts } from "../mock/asyncData";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [categoria, setCategoria] = useState("todos");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then((respuesta) => {
                setProductos(respuesta);
                setProductosFiltrados(respuesta);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (categoria === "todos") {
            setProductosFiltrados(productos);
        } else {
            const filtrados = productos.filter(
                (prod) => prod.categoria === categoria
            );

            setProductosFiltrados(filtrados);
        }
    }, [categoria, productos]);

    if (loading) return <Loading />;

    return (
        <div className="container">

            {/* Filtros */}
            <div className="mb-4 text-center">
                <button
                    className="btn btn-dark me-2"
                    onClick={() => setCategoria("todos")}
                >
                    Todos
                </button>

                <button
                    className="btn btn-primary me-2"
                    onClick={() => setCategoria("celulares")}
                >
                    Celulares
                </button>

                <button
                    className="btn btn-success me-2"
                    onClick={() => setCategoria("computadoras")}
                >
                    Computadoras
                </button>

                <button
                    className="btn btn-warning"
                    onClick={() => setCategoria("accesorios")}
                >
                    Accesorios
                </button>
            </div>

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
            </div>
        </div>
    );
};

export default ItemListContainer;