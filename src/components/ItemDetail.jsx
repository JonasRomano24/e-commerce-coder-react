import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncData";

const ItemDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProducts().then(data => {
            const prod = data.find(p => p.id === Number(id));
            setProducto(prod);
        });
    }, [id]);

    if (!producto) return <h2>Cargando...</h2>;

    return (
        <div className="container mt-4">
            <h2>{producto.titulo}</h2>
            <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
            <p>{producto.descripcion}</p>
            <h3>${producto.precio}</h3>
        </div>
    );
};

export default ItemDetail;