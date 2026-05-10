import { useCart } from "../context/CartContext";

import "../css/cart.css";

const CartView = () => {

    const {
        cart,
        removeFromCart,
        clearCart,
        totalPrice,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    if (cart.length === 0) {
        return (
            <h2 className="text-center mt-5">
                El carrito está vacío
            </h2>
        );
    }

    return (
        <div className="container mt-4">

            <h2 className="mb-4">
                Carrito de compras
            </h2>

            {
                cart.map((producto) => (

                    <div
                        key={producto.id}
                        className="cart-item"
                    >

                        <div className="cart-left">

                            <img
                                src={producto.imagen}
                                alt={producto.titulo}
                            />

                            <div className="cart-info">

                                <h4>{producto.titulo}</h4>

                                <div className="quantity-controls">

                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => decreaseQuantity(producto.id)}
                                    >
                                        -
                                    </button>

                                    <span>{producto.quantity}</span>

                                    <button
                                        className="btn btn-outline-dark"
                                        onClick={() => increaseQuantity(producto.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                <h5>
                                    $
                                    {producto.precio.toLocaleString()}
                                </h5>

                            </div>

                        </div>

                        <div className="cart-right">

                            <h4>
                                $
                                {(producto.precio * producto.quantity)
                                    .toLocaleString()}
                            </h4>

                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    removeFromCart(producto.id)
                                }
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>
                ))
            }

            <hr />

            <h3>
                Total: ${totalPrice.toLocaleString()}
            </h3>

            <button
                className="btn btn-warning mt-3"
                onClick={clearCart}
            >
                Vaciar carrito
            </button>

        </div>
    );
};

export default CartView;