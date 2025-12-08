import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="menuprincipal">
            <ul>
                <li>
                    <NavLink to="/" end className="navlink">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className="navlink">
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
