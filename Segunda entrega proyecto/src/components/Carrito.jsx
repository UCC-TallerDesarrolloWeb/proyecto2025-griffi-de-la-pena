import { useCart } from "@/context/Carritocontext.jsx";
import { useState, useMemo } from "react"; // maneja imputs, calcula errores

export default function Carrito() {

    // sacamos contexto del carrito
    const { items, total, removeItem, clear } = useCart();

    // Estados del formulario
    const [nombre, setNombre] = useState("");
    const [mesa, setMesa] = useState("");
    const [pago, setPago] = useState("");

    // Validaciones del formulario.
    // cambia algo como nombre o mesa se recalcula
    const errors = useMemo(() => {
        const e = {};

        if (nombre.trim().length < 2)
            e.nombre = "Ingresá tu nombre (mínimo 2 letras).";

        if (!(Number(mesa) >= 1))
            e.mesa = "Ingresá un número de mesa válido.";

        if (!pago)
            e.pago = "Elegí un método de pago.";

        if (!items.length)
            e.items = "Agregá al menos un producto.";

        return e;
    }, [nombre, mesa, pago, items]);

    // envío del formulario
    const onSubmit = (e) => {
        e.preventDefault();

        // control de error
        if (Object.keys(errors).length) return;

        // guadado de pedido en localStorage
        localStorage.setItem(
            "ultimoPedido",
            JSON.stringify({
                nombre,
                mesa,
                pago,
                total,
                items
            })
        );

        alert("Pedido registrado correctamente.");
    };

    return (
        <div>
            <h3>Carrito</h3>

            {items.length === 0 ? (
                <p id="carritovacio">Tu carrito está vacío.</p>
            ) : (
                <>
                    {/* Lista de productos */}
                    <ul id="productoscarrito">
                        {items.map((it) => (
                            <li key={it.id} className="cart-row">
                                <span>{it.nombre} (x{it.cantidad})</span>

                                <span className="cart-price">
                                    $ {(it.precio * it.cantidad).toLocaleString("es-AR")}
                                    
                                    {/* Botón para quitar producto */}
                                    <button
                                        className="btn-borrar"
                                        onClick={() => removeItem(it.id)}
                                    >
                                        🗑
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>

                    <output className="cart-total">
                        Total: <strong id="total">$ {total.toLocaleString("es-AR")}</strong>
                    </output>


                    <div className="carrito-acciones">
                        <button id="vaciar" className="agregar" onClick={clear}>
                            Vaciar
                        </button>
                    </div>

                    <hr className="carrito-separador" />

                    <form className="pedido-form" onSubmit={onSubmit}>
                        <h4>Confirmar pedido</h4>

                        <label className="lbl">
                            Nombre
                            <input
                                type="text"
                                placeholder="tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <div className="err">{errors.nombre || ""}</div>
                        </label>

                        <label className="lbl">
                            Número de mesa
                            <input
                                type="number"
                                placeholder="ej: 12"
                                value={mesa}
                                onChange={(e) => setMesa(e.target.value)}
                            />
                            <div className="err">{errors.mesa || ""}</div>
                        </label>

                        <label className="lbl">
                            Método de pago
                            <select value={pago} onChange={(e) => setPago(e.target.value)}>
                                <option value="">Elegí un método</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="debito">Débito</option>
                                <option value="credito">Crédito</option>
                                <option value="qr">QR</option>
                            </select>
                            <div className="err">{errors.pago || ""}</div>
                        </label>

                        {/* Error si no hay productos */}
                        {errors.items && <div className="err">{errors.items}</div>}

                        <button type="submit" className="agregar">
                            Confirmar pedido
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}
