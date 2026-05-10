import ProductCard from "./ProductCard";

function ProductGrid({ productos, abrirModal }) {

    return (
        <div className="row">

            {productos.map((prod) => (

                <div
                    className="col-md-4 mb-4"
                    key={prod.id}
                >
                    <ProductCard
                        {...prod}
                        abrirModal={abrirModal}
                    />
                </div>

            ))}

        </div>
    );
}

export default ProductGrid;