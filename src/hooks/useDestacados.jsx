import { useEffect, useState } from "react";

import { getProducts } from "../mock/asyncData";

export const useDestacados = (categoria) => {

    const [destacados, setDestacados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        setLoading(true);
        setError(false);

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

                setDestacados(filtrados);

            })

            .catch((err) => {

                console.error(err);
                setError(true);

            })

            .finally(() => {

                setLoading(false);

            });

    }, [categoria]);

    return {
        destacados,
        loading,
        error
    };
};