import { useEffect, useState } from "react";

import { getProducts } from "../mock/asyncData";

export const useProductos = (categoria) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        getProducts()

            .then((data) => {

                let filtrados = [];

                // OFERTAS

                if (categoria === "ofertas") {

                    filtrados = data.filter(
                        (p) => p.oferta
                    );

                }

                // DESTACADOS

                else if (
                    categoria === "destacados"
                ) {

                    filtrados = data.filter(
                        (p) => p.destacado
                    );

                }

                // CATEGORÍAS

                else if (
                    categoria !== "todos"
                ) {

                    filtrados = data.filter(
                        (p) =>
                            p.categoria === categoria
                    );

                }

                // TODOS

                else {

                    filtrados = data;

                }

                setProductos(
                    filtrados.map((p) => ({
                        ...p,
                        boton: "Ver producto"
                    }))
                );

            })

            .catch((err) =>
                console.error(err)
            );

    }, [categoria]);

    return {
        productos
    };
};