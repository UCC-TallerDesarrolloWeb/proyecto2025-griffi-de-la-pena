import { useCart } from "@/context/useCart";


// listado productos
export default function Productoscarrito({ productos }) {

    // función addItem del contexto
    const { addItem } = useCart();

    if (!productos?.length) return <p>No hay productos.</p>;

    return (
        <div>

            {/* Recorremos la lista de productos y mostramos cada uno */}
            {productos.map((p) => (
                <article className="producto" key={p.id}>

                    {/* Imagen del producto */}
                    <img src={p.img} alt={p.nombre} width="140" height="140" />

                    <div>
                        {/* Nombre */}
                        <h3>{p.nombre}</h3>

                        {/* Descripción */}
                        <p className="descripcion">{p.descripcion}</p>

                        {/* Precio */}
                        <p className="precio">
                            $ {p.precio.toLocaleString("es-AR")}
                        </p>

                        {/* Categoría */}
                        <small>{p.categoria}</small>
                        <br />

                        {/* Botón agregar */}
                        <button
                            className="agregar"
                            onClick={() =>
                                addItem({
                                    id: p.id,
                                    nombre: p.nombre,
                                    precio: p.precio,
                                })
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
