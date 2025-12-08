import Header from "@/components/Header.jsx";
import Carrito from "@/components/Carrito.jsx";
import Footer from "@/components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <Header />

            <div id="pagina">
                <main className="contenido">
                    <Outlet />
                </main>

                <aside id="carrito">
                    <Carrito />
                </aside>
            </div>

            <Footer />
        </>
    );
}
