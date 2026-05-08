export const adaptProducts = (productos) => {

    return productos.map((p) => ({
        id: p.id,
        titulo: p.title,
        imagen: p.thumbnail,
        descripcion: p.description,
        precio: Math.round(p.price * 40),
        boton: "Ver producto"
    }));

};