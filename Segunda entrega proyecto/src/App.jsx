import { Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout.jsx";
import Inicio from "@/pages/Inicio.jsx";
import Contacto from "@/pages/Contacto.jsx";

export default function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Inicio />} />
                <Route path="contacto" element={<Contacto />} />
            </Route>
        </Routes>
    );
}

