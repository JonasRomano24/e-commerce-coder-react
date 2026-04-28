import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setProductos([
                {
                    id: 1,
                    titulo: "Samsung Galaxy A35",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "128GB - 8GB RAM",
                    precio: 18990
                },
                {
                    id: 2,
                    titulo: "iPhone 13",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "128GB",
                    precio: 42990
                },
                {
                    id: 3,
                    titulo: "Xiaomi Redmi Note 13",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "256GB",
                    precio: 15990
                },
                {
                    id: 4,
                    titulo: "Motorola G84",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "256GB",
                    precio: 17990
                },
                {
                    id: 5,
                    titulo: "Samsung S24",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "256GB",
                    precio: 46990
                },

                {
                    id: 6,
                    titulo: "Notebook HP 15",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "Ryzen 5 - 8GB RAM",
                    precio: 28990
                },
                {
                    id: 7,
                    titulo: "Lenovo IdeaPad 3",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "i5 - 16GB RAM",
                    precio: 33990
                },
                {
                    id: 8,
                    titulo: "ASUS TUF Gaming",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "RTX 4050 - 16GB",
                    precio: 58990
                },
                {
                    id: 9,
                    titulo: "MacBook Air M2",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "256GB SSD",
                    precio: 69990
                },
                {
                    id: 10,
                    titulo: "PC Gamer Ryzen 7",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "RTX 4060",
                    precio: 64990
                },

                {
                    id: 11,
                    titulo: "Mouse Logitech G203",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "RGB Gamer",
                    precio: 1990
                },
                {
                    id: 12,
                    titulo: "Mouse Redragon Cobra",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "12400 DPI",
                    precio: 2490
                },
                {
                    id: 13,
                    titulo: "Teclado Redragon Kumara",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "Mecánico RGB",
                    precio: 3990
                },
                {
                    id: 14,
                    titulo: "Teclado Logitech K380",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "Bluetooth",
                    precio: 3590
                },
                {
                    id: 15,
                    titulo: "Auriculares HyperX Cloud",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "Gaming Headset",
                    precio: 5990
                },

                {
                    id: 16,
                    titulo: "Monitor Samsung 24",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "75Hz Full HD",
                    precio: 9990
                },
                {
                    id: 17,
                    titulo: "Monitor LG 27",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "144Hz IPS",
                    precio: 16990
                },
                {
                    id: 18,
                    titulo: "Tablet Samsung A9",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "64GB",
                    precio: 12990
                },
                {
                    id: 19,
                    titulo: "Webcam Logitech C920",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "Full HD",
                    precio: 4990
                },
                {
                    id: 20,
                    titulo: "Disco SSD Kingston 1TB",
                    imagen: "https://via.placeholder.com/300",
                    descripcion: "NVMe",
                    precio: 4590
                }
            ]);

            setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="container">
            <div className="row">
                {productos.map((prod) => (
                    <div className="col-md-4" key={prod.id}>
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