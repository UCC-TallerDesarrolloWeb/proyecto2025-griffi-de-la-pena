import Header from "@/components/Header.jsx";
import Nav from "@/components/Nav.jsx";
import Footer from "@/components/Footer.jsx";
import Carrito from "@/components/Carrito.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <Header><Nav /></Header>

            <div className="layout">
                <main className="content">
                    <Outlet />
                </main>
                <aside className="sidebar">
                    <Carrito />
                </aside>
            </div>

            <Footer />
        </>
    );
}
