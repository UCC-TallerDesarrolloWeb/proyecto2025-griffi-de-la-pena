import { useCart } from "@/context/Carritocontext.jsx";

export default function Productoscarrito({ productos }) {
    const { addItem } = useCart();

    if (!productos?.length) return <p>No hay productos.</p>;

    return (
        <div className="grid-prod">
            {productos.map((p) => (
                <article className="producto" key={p.id}>
                    <img src={p.img} alt={p.nombre} width="140" height="140" />
                    <div>
                        <h3>{p.nombre}</h3>
                        <p className="precio">$ {p.precio.toLocaleString("es-AR")}</p>
                        <small>{p.categoria}</small><br />
                        <button
                            className="agregar"
                            onClick={() =>
                                addItem({ id: p.id, nombre: p.nombre, precio: p.precio })
                            }
                        >
                            Agregar
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}


