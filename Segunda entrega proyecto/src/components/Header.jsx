import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

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
                        <button
                            type="button"
                            className="link"
                            onClick={() => navigate("/contacto")}
                        >
                            Contacto
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
