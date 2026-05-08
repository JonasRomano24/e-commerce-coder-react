import { useCart } from "../context/CartContext";

function CartWidget() {

    const { totalItems } = useCart();

    return (
        <div className="d-flex align-items-center gap-2">

            <span>🛒</span>

            <span className="badge bg-dark">
                {totalItems}
            </span>

        </div>
    );
}

export default CartWidget;