import { NavLink } from "react-router-dom";

const linkActivo = ({ isActive }) => ({
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    background: isActive ? "#efece7" : "transparent",
    color: "#333",
});

export default function Nav() {
    return (
        <nav style={{ marginTop: 8 }}>
            <NavLink to="/" style={linkActivo} end>Inicio</NavLink>{" "}
            <NavLink to="/contacto" style={linkActivo}>Contacto</NavLink>
        </nav>
    );
}

