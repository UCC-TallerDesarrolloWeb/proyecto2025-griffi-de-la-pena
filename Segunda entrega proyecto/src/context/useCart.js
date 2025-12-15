import { useContext } from "react";
import { CartCtx } from "./Carritocontext";

export const useCart = () => useContext(CartCtx);
