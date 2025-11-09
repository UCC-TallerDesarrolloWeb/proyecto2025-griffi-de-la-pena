import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartCtx = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartCtx);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        try {
            const raw = localStorage.getItem("carrito");
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(items));
    }, [items]);

    const addItem = (prod) => {
        setItems((prev) => {
            const i = prev.findIndex((p) => p.id === prod.id);
            if (i >= 0) {
                const copy = [...prev];
                copy[i] = { ...copy[i], cantidad: copy[i].cantidad + 1 };
                return copy;
            }
            return [...prev, { ...prod, cantidad: 1 }];
        });
    };

    const removeItem = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
    const clear = () => setItems([]);

    const total = useMemo(
        () => items.reduce((acc, it) => acc + it.precio * it.cantidad, 0),
        [items]
    );

    const count = useMemo(
        () => items.reduce((acc, it) => acc + it.cantidad, 0),
        [items]
    );

    // 🔍 Debug en dev sin usar eslint-disable
    if (import.meta.env.DEV && typeof window !== "undefined") {
        window.cartDebug = { add: addItem, remove: removeItem, clear, items, total, count };
    }

    return (
        <CartCtx.Provider value={{ items, addItem, removeItem, clear, total, count }}>
            {children}
        </CartCtx.Provider>
    );
};
