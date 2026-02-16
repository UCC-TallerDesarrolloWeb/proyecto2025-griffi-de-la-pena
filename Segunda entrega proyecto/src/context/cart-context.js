import { createContext, useContext } from "react";

// Contexto del carrito con valor inicial seguro para evitar errores
export const CartCtx = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
    total: 0,
    count: 0,
});

// Hook para consumir el contexto del carrito
export const useCart = () => useContext(CartCtx);
