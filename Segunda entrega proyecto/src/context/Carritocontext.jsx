// Importamos los hooks de React que usaremos
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Creamos el contexto del carrito
const CartCtx = createContext(null);

// Hook personalizado para usar el carrito desde cualquier componente
export const useCart = () => useContext(CartCtx);

// Provider que envuelve a toda la app y maneja el carrito global
export const CartProvider = ({ children }) => {

    // Estado principal del carrito.
    // Se inicializa leyendo lo que haya en localStorage (si hubiese).
    const [items, setItems] = useState(() => {
        try {
            const raw = localStorage.getItem("carrito");
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    });

    // Cada vez que el carrito cambia, lo guardamos en localStorage
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(items));
    }, [items]);

    // Agregar producto al carrito
    const addItem = (prod) => {
        setItems((prev) => {
            const i = prev.findIndex((p) => p.id === prod.id);

            // Si ya existe → aumentamos cantidad
            if (i >= 0) {
                const copy = [...prev];
                copy[i] = { ...copy[i], cantidad: copy[i].cantidad + 1 };
                return copy;
            }

            // Si no existe → lo agregamos con cantidad 1
            return [...prev, { ...prod, cantidad: 1 }];
        });
    };

    // Eliminar un producto por id
    const removeItem = (id) =>
        setItems((prev) => prev.filter((p) => p.id !== id));

    // Vaciar carrito
    const clear = () => setItems([]);

    // Total $ del carrito (precio * cantidad)
    const total = useMemo(
        () => items.reduce((acc, it) => acc + it.precio * it.cantidad, 0),
        [items]
    );

    // Cantidad total de productos dentro del carrito
    const count = useMemo(
        () => items.reduce((acc, it) => acc + it.cantidad, 0),
        [items]
    );

    // Debug opcional para ver el carrito en consola
    if (import.meta.env.DEV && typeof window !== "undefined") {
        window.cartDebug = { add: addItem, remove: removeItem, clear, items, total, count };
    }

    // Devolvemos el Provider compartiendo toda la lógica del carrito
    return (
        <CartCtx.Provider value={{ items, addItem, removeItem, clear, total, count }}>
            {children}
        </CartCtx.Provider>
    );
};
