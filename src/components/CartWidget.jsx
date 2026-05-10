import { useCart } from "../context/CartContext";

const CartWidget = () => {

    const { totalItems } = useCart();

    return (
        <span style={{ color: "white" }}>
            🛒 {totalItems}
        </span>
    );
};

export default CartWidget;