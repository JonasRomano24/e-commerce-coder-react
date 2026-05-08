import { useRef } from "react";
import ProductCard from "./ProductCard";

function ProductSlider({ productos }) {

    const sliderRef = useRef(null);

    const scroll = (dir) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left:
                    dir === "left"
                        ? -sliderRef.current.offsetWidth
                        : sliderRef.current.offsetWidth,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="position-relative">

            <button
                onClick={() => scroll("left")}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3"
            >
                ◀
            </button>

            <div
                ref={sliderRef}
                className="d-flex gap-3 overflow-auto pb-3"
            >
                {productos.map(prod => (
                    <div
                        key={prod.id}
                        style={{ flex: "0 0 20%" }}
                    >
                        <ProductCard {...prod} id={prod.id} />
                    </div>
                ))}
            </div>

            <button
                onClick={() => scroll("right")}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3"
            >
                ▶
            </button>

        </div>
    );
}

export default ProductSlider;