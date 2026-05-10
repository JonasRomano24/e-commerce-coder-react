import { useEffect, useState } from "react";

import { categoriasMap } from "../data/categorias";
import { adaptProducts } from "../helpers/adaptProducts";

export const useDestacados = (categoria) => {

    const [destacados, setDestacados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);
                setError(false);

                let urls = [];

                // OFERTAS

                if (categoria === "ofertas") {

                    urls = [
                        "https://dummyjson.com/products/category/smartphones"
                    ];

                }

                // DESTACADOS

                else if (categoria === "destacados") {

                    urls = [
                        "https://dummyjson.com/products/category/laptops"
                    ];

                }

                // CATEGORÍAS

                else {

                    const catApi =
                        categoriasMap[categoria]?.api;

                    urls = catApi
                        ? [
                            `https://dummyjson.com/products/category/${catApi}`
                        ]
                        : [
                            "https://dummyjson.com/products/category/smartphones",
                            "https://dummyjson.com/products/category/laptops"
                        ];
                }

                const responses = await Promise.all(
                    urls.map((url) => fetch(url))
                );

                const data = await Promise.all(
                    responses.map((r) => r.json())
                );

                const todos = data.flatMap(
                    (d) => d.products
                );

                setDestacados(
                    adaptProducts(todos)
                );

            } catch (err) {

                console.error(err);
                setError(true);

            } finally {

                setLoading(false);

            }
        };

        fetchData();

    }, [categoria]);

    return {
        destacados,
        loading,
        error
    };
};