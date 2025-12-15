import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; //Para varias pantallas como contacto o productos
import App from "./App.jsx";
import { CartProvider } from "@/context/Carritocontext.jsx";
import "@/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(// conecta html con react
    <React.StrictMode> 
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <CartProvider>
                <App />
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);

