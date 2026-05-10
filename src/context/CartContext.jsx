import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto) => {

        setCart((prev) => {

            const existe = prev.find(
                (p) => p.id === producto.id
            );

            // Si el producto ya existe
            // aumenta quantity

            if (existe) {

                return prev.map((p) =>
                    p.id === producto.id
                        ? {
                            ...p,
                            quantity: p.quantity + 1
                        }
                        : p
                );
            }

            // Si no existe
            // lo agrega al carrito

            return [
                ...prev,
                {
                    ...producto,
                    quantity: 1
                }
            ];
        });
    };

    const removeFromCart = (id) => {

        setCart((prev) =>
            prev.filter((p) => p.id !== id)
        );
    };
    const increaseQuantity = (id) => {

        const updatedCart = cart.map((product) => {

            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                };
            }

            return product;
        });

        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {

        const updatedCart = cart
            .map((product) => {

                if (product.id === id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    };
                }

                return product;
            })

            .filter((product) => product.quantity > 0);

        setCart(updatedCart);
    };
    const clearCart = () => setCart([]);

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const totalPrice = cart.reduce(
        (acc, item) =>
            acc + item.precio * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};