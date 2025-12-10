import Header from "@/components/Header.jsx";
import Carrito from "@/components/Carrito.jsx";
import Footer from "@/components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

export default function RootLayout() {
    const { pathname } = useLocation();
    const enContacto = pathname === "/contacto";

    return (
        <>
            <Header />

            <div id="pagina" className={enContacto ? "sin-carrito" : ""}>
                <main className="contenido">
                    <Outlet />
                </main>

                {!enContacto && (
                    <aside id="carrito">
                        <Carrito />
                    </aside>
                )}
            </div>

            <Footer />
        </>
    );
}
