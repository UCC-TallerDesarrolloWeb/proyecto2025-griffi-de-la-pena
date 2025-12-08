import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="encabezado">
            <img
                src="/logo-505.png"
                alt="Logo de Café 505"
                className="logo"
                width="64"
                height="64"
            />

            <h1 className="titulo">CAFÉ 505</h1>

            <nav className="menuprincipal">
                <ul>
                    <li>
                        <NavLink to="/" end>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
