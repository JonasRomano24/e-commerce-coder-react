import {
    createContext,
    useContext,
    useState
} from "react";

const CartContext = createContext();

export const useCart = () =>
    useContext(CartContext);

export const CartProvider = ({
    children
}) => {

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

    const clearCart = () => setCart([]);

    // Total de productos

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    // Precio total

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
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};