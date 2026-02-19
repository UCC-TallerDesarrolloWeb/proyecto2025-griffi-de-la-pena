import { Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.jsx";
import Inicio from "@/pages/Inicio.jsx"; //header, footer, carrito fijo,etc
import Contacto from "@/pages/Contacto.jsx";
import "@/styles/estilos.scss";


export default function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Inicio />} />
                <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    );
} // CONTENEDOR PRINCIPAL DE TODAS LAS RUTAS

