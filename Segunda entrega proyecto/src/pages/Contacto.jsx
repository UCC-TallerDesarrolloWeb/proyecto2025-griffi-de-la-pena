import { useEffect } from "react";

export default function Contacto() {

    // Ocultar la sidebar (carrito) solo en esta página
    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar) sidebar.style.display = "none";

        // Cuando salimos de Contacto → vuelve a aparecer
        return () => {
            if (sidebar) sidebar.style.display = "";
        };
    }, []);

    return (
        <section className="seccion">
            <h2>Contacto</h2>

            <p><strong>Dirección:</strong> Benigno Acosta 4541</p>
            <p><strong>Horario:</strong> 9 a 20 hs</p>
            <p><strong>Instagram:</strong> @cafe505.cba</p>
            <p><strong>Teléfono:</strong> 0351 795 3422</p>

            <img
                src="/logo-505.png"
                alt="Isotipo Café 505"
                width="120"
                height="120"
                style={{ marginTop: "1rem" }}
            />
        </section>
    );
}
