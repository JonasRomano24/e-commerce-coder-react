import ProductCard from "./ProductCard";

function ProductGrid({ productos }) {

    return (
        <div className="row">

            {productos.map((prod) => (

                <div
                    className="col-md-4 mb-4"
                    key={prod.id}
                >
                    <ProductCard
                        {...prod}
                        id={prod.id}
                    />
                </div>

            ))}

        </div>
    );
}

export default ProductGrid;