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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const url = `${import.meta.env.BASE_URL}api/products.json`;
                const res = await fetch(url, { cache: "no-store" });
                if (!res.ok) throw new Error("HTTP " + res.status);
                const data = await res.json();
                const withNormalizedCats = (Array.isArray(data) ? data : []).map((p) => ({
                    ...p,
                    categoria: normalizeCategory(p.categoria),
                }));
                setProductos(withNormalizedCats);
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
        return productos.filter(
            (p) =>
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
        for (const [cat, arr] of map) {
            if (!CATEGORIAS_ORDEN.includes(cat)) ordenadas.push([cat, arr]);
        }
        return ordenadas;
    }, [productosFiltrados]);

    if (loading) return <p role="status">Cargando catálogo…</p>;
    if (error) return <p role="alert">{error}</p>;

    return (
        <>
            <div
                className="hero"
                style={{ backgroundImage: `url(${fotoDeFondo})` }}
                aria-label="Café 505"
            ></div>

            <section className="seccion">
                <h2>Buscar producto</h2>

                <div className="buscador">
                    <label htmlFor="buscar" className="sr-only">
                        Nombre del producto
                    </label>
                    <input
                        id="buscar"
                        type="text"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Buscar por nombre o categoría"
                        aria-label="Buscar por nombre o categoría"
                    />
                    <button
                        className="agregar"
                        onClick={() => document.getElementById("buscar")?.focus()}
                    >
                        Buscar
                    </button>
                </div>

                <div className="categorias">
                    <ul>
                        {CATEGORIAS_ORDEN.map((cat) => (
                            <li key={cat}>
                                <button onClick={() => setQ(cat)} className="chip" type="button">
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {porCategoria.map(([cat, items]) => (
                <section className="seccion" key={cat}>
                    <h2>{cat}</h2>
                    <Productoscarrito productos={items} />
                </section>
            ))}

            {porCategoria.length === 0 && (
                <section className="seccion">
                    <p>No se encontraron productos con ese criterio.</p>
                </section>
            )}
        </>
    );
}
