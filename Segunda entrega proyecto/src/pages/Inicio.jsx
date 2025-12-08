import { useEffect, useMemo, useState } from "react";
import Productoscarrito from "@/components/Productoscarrito.jsx";
import fotoDeFondo from "@/assets/fotoDeFondo.jpg";

const CATEGORIAS_ORDEN = [
    "Bebidas frías",
    "Bebidas calientes",
    "Galletas",
    "Budines",
    "Panificadora",
    "Sandwichs",
];

function normalizeCategory(raw) {
    const s = (raw || "").toLowerCase();
    if (["cookies", "galletas"].includes(s)) return "Galletas";
    if (["salados", "sándwiches", "sandwiches", "sandwichs"].includes(s)) return "Sandwichs";
    if (["desayunos", "panificados", "panificadora", "panificados/as"].includes(s)) return "Panificadora";
    if (["bebidas frias", "bebidas frías"].includes(s)) return "Bebidas frías";
    if (["bebidas calientes", "en tazón", "en tazon"].includes(s)) return "Bebidas calientes";
    if (["budines", "budín", "budin"].includes(s)) return "Budines";
    return CATEGORIAS_ORDEN.find((c) => c.toLowerCase() === s) || raw || "Otros";
}

export default function Inicio() {
    const [productos, setProductos] = useState([]);
    const [q, setQ] = useState("");
    const [qInput, setQInput] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:3001/products");
                if (!res.ok) throw new Error("HTTP " + res.status);

                const data = await res.json();

                const normalized = (Array.isArray(data) ? data : []).map((p) => ({
                    ...p,
                    categoria: normalizeCategory(p.categoria),
                }));

                setProductos(normalized);
            } catch (e) {
                console.error(e);
                setError("No se pudo cargar el catálogo.");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const productosFiltrados = useMemo(() => {
        const term = q.trim().toLowerCase();
        if (!term) return productos;

        return productos.filter((p) =>
            p.nombre.toLowerCase().includes(term) ||
            (p.categoria || "").toLowerCase().includes(term)
        );
    }, [productos, q]);

    const porCategoria = useMemo(() => {
        const map = new Map();

        for (const p of productosFiltrados) {
            const cat = p.categoria || "Otros";
            if (!map.has(cat)) map.set(cat, []);
            map.get(cat).push(p);
        }

        const ordenadas = [];

        for (const cat of CATEGORIAS_ORDEN) {
            if (map.has(cat)) ordenadas.push([cat, map.get(cat)]);
        }

        for (const [cat, items] of map) {
            if (!CATEGORIAS_ORDEN.includes(cat)) ordenadas.push([cat, items]);
        }

        return ordenadas;
    }, [productosFiltrados]);

    if (loading) return <p role="status">Cargando catálogo…</p>;
    if (error) return <p role="alert">{error}</p>;

    return (
        <>
            <div
                className="hero"
                style={{ backgroundImage: "url('/fotodefondo.jpg')" }}
            ></div>


            <section className="seccion">
                <h2>Buscar producto</h2>

                <div className="buscador">
                    <input
                        id="buscar"
                        type="text"
                        value={qInput}
                        onChange={(e) => setQInput(e.target.value)}
                        placeholder="Buscar por nombre o categoría"
                    />

                    <button className="agregar" onClick={() => setQ(qInput)}>
                        Buscar
                    </button>
                </div>

                <div className="categorias">
                    <ul>
                        {CATEGORIAS_ORDEN.map((cat) => (
                            <li key={cat}>
                                <button
                                    type="button"
                                    className="chip"
                                    onClick={() => setQ(cat)}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {porCategoria.map(([cat, items]) => (
                <section key={cat} className="seccion">
                    <h2>{cat}</h2>
                    <Productoscarrito productos={items} />
                </section>
            ))}

            {porCategoria.length === 0 && (
                <section className="seccion">
                    <p>No se encontraron productos.</p>
                </section>
            )}
        </>
    );
}
