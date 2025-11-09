import { useCart } from "@/context/Carritocontext.jsx";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button.jsx";

export default function Carrito() {
    const { items, total, removeItem, clear } = useCart();
    const [nombre, setNombre] = useState("");
    const [mesa, setMesa] = useState("");
    const [pago, setPago] = useState("");
    const [confirmado, setConfirmado] = useState(false);
    const navigate = useNavigate();

    const errors = useMemo(() => {
        const e = {};
        if (nombre.trim().length < 2) e.nombre = "Ingresá tu nombre (mínimo 2 letras).";
        const m = Number(mesa);
        if (!m || m < 1) e.mesa = "Ingresá un número de mesa válido.";
        if (!pago) e.pago = "Elegí un método de pago.";
        if (!items.length) e.items = "Agregá al menos un producto.";
        return e;
    }, [nombre, mesa, pago, items]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length) return;

        setConfirmado(true);

        localStorage.setItem(
            "ultimoPedido",
            JSON.stringify({ nombre, mesa, pago, total, items })
        );

        navigate("/contacto", { state: { ok: true } });
    };

    return (
        <div>
            <h3>Carrito</h3>

            {items.length === 0 ? (
                <p id="carritovacio">Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul id="productoscarrito">
                        {items.map((it) => (
                            <li key={it.id} className="cart-row">
                                <span>{it.nombre} (x{it.cantidad})</span>
                                <span className="cart-price">
                  $ {(it.precio * it.cantidad).toLocaleString("es-AR")}
                                    <button
                                        className="btn-borrar"
                                        onClick={() => removeItem(it.id)}
                                        aria-label={`Quitar ${it.nombre}`}
                                        title="Quitar"
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

                    <div style={{ marginTop: 8 }}>
                        <Button variant="outline" onClick={clear} id="vaciar">Vaciar</Button>
                    </div>

                    <hr style={{ margin: "1rem 0", borderColor: "#eee" }} />

                    <form className="pedido-form" onSubmit={onSubmit}>
                        <h4>Confirmar pedido</h4>

                        <label className="lbl">
                            Nombre
                            <input
                                type="text"
                                placeholder="tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                aria-invalid={!!errors.nombre}
                                aria-describedby="err-nombre"
                            />
                            <div id="err-nombre" className="err" aria-live="polite">{errors.nombre || ""}</div>
                        </label>

                        <label className="lbl">
                            Número de mesa
                            <input
                                type="number"
                                placeholder="ej: 12"
                                value={mesa}
                                onChange={(e) => setMesa(e.target.value)}
                                aria-invalid={!!errors.mesa}
                                aria-describedby="err-mesa"
                            />
                            <div id="err-mesa" className="err" aria-live="polite">{errors.mesa || ""}</div>
                        </label>

                        <label className="lbl">
                            Método de pago
                            <select
                                value={pago}
                                onChange={(e) => setPago(e.target.value)}
                                aria-invalid={!!errors.pago}
                                aria-describedby="err-pago"
                            >
                                <option value="">Elegí un método</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="debito">Débito</option>
                                <option value="credito">Crédito</option>
                                <option value="qr">QR</option>
                            </select>
                            <div id="err-pago" className="err" aria-live="polite">{errors.pago || ""}</div>
                        </label>

                        {errors.items && <p className="err" aria-live="polite">{errors.items}</p>}

                        <Button type="submit">Confirmar pedido</Button>

                        {confirmado && (
                            <p className="ok-msg" role="status" aria-live="polite">
                                En unos minutos alguien va a pasar por tu mesa a cobrarte.
                            </p>
                        )}
                    </form>
                </>
            )}
        </div>
    );
}
