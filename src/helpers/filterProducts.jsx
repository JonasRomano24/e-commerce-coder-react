export const filterProducts = (
    productos,
    busqueda
) => {

    return productos.filter((p) =>
        p.titulo
            ?.toLowerCase()
            .includes(busqueda.toLowerCase())
    );

};