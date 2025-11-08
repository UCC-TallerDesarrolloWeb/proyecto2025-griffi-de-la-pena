/**
 * Valida un número entero no negativo. Si es inválido, alerta y blanquea el input.
 * @method validarEnteroNoNegativo
 * @param {HTMLInputElement} input - Campo de entrada a validar
 * @returns {boolean} true si es válido; false si no lo es
 */
const validarEnteroNoNegativo = (input) => {
    const v = Number(input.value);
    const ok = Number.isFinite(v) && v >= 0 && Number.isInteger(v);
    if (!ok) {
        alert("Ingresá un número entero válido (>= 0).");
        input.value = "";
        input.focus();
    }
    return ok;
};

/**
 * Calcula el total aplicando descuento sobre el subtotal.
 * @method calcularTotal
 * @param {number} precio - Precio unitario
 * @param {number} cantidad - Cantidad de unidades
 * @param {number} descuento - Descuento en porcentaje (0-100)
 * @returns {number} Total calculado (entero y no negativo)
 */
const calcularTotal = (precio, cantidad, descuento) => {
    const sub = precio * cantidad;
    const desc = sub * (descuento / 100);
    return Math.max(0, Math.round(sub - desc));
};

/** @type {{nombre: string, precio: number, cantidad: number}[]} */
const carrito = [];

/**
 * Agrega un producto al carrito; si ya existe, suma cantidades.
 * @method agregarAlCarrito
 * @param {string} nombre - Nombre del producto
 * @param {number} precio - Precio unitario
 * @param {number} cantidad - Cantidad a agregar
 * @returns {void}
 */
const agregarAlCarrito = (nombre, precio, cantidad) => {
    const idx = carrito.findIndex(i => i.nombre === nombre);
    if (idx >= 0) {
        carrito[idx].cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }
    renderCarrito();
};

/**
 * Dibuja visualmente el carrito (lista y total). Muestra/oculta "carrito vacío".
 * @method renderCarrito
 * @returns {void}
 */
const renderCarrito = () => {
    const ul = document.getElementById("productoscarrito");
    const totalEl = document.getElementById("total");
    const empty = document.getElementById("carritovacio");

    ul.innerHTML = "";
    if (carrito.length === 0) {
        empty.style.display = "block";
        totalEl.textContent = "0";
    } else {
        empty.style.display = "none";

        let total = 0;
        carrito.forEach((item, i) => {
            const li = document.createElement("li");
            const sub = item.precio * item.cantidad;
            total += sub;

            li.innerHTML = `<span>${item.nombre} (x${item.cantidad})</span>
                      <span>$ ${sub} <button class="btn-borrar" data-index="${i}">🗑</button></span>`;
            ul.appendChild(li);
        });

        totalEl.textContent = String(total);
    }

    actualizarCarritoVisible();
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

/**
 * Muestra u oculta los botones y el formulario del pedido
 * según si hay o no productos en el carrito.
 *
 * @method actualizarCarritoVisible
 * @returns {void}
 */
const actualizarCarritoVisible = () => {
    const btnVaciar = document.getElementById("vaciar");
    const btnConfirmar = document.getElementById("confirmar");
    const formPedido = document.getElementById("form-pedido");

    const tieneProductos = carrito.length > 0;

    if (tieneProductos) {
        btnVaciar.style.display = "inline-block";
        btnConfirmar.style.display = "inline-block";
        formPedido.style.display = "block";
    } else {
        btnVaciar.style.display = "none";
        btnConfirmar.style.display = "none";
        formPedido.style.display = "none";
    }
};

/**
 * Inicializa listeners de UI para catálogo, carrito, búsqueda y confirmación.
 * @method initUI
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", () => {

    /** @function clickCarrito - Maneja eliminación individual de productos. */
    document.getElementById("carrito").addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("btn-borrar")) {
            const i = Number(target.getAttribute("data-index"));
            carrito.splice(i, 1);
            renderCarrito();
        }
    });


    /** @function clickConfirmar - Valida y confirma el pedido. */
    const formPedido = document.getElementById("form-pedido");
    const inpNombre = document.getElementById("nombre");
    const inpMesa = document.getElementById("mesa");
    const selPago = document.getElementById("pago");

    const guardado = localStorage.getItem("carrito");
    if (guardado) {
        try {
            const datos = JSON.parse(guardado);
            if (Array.isArray(datos)) carrito.push(...datos);
        } catch {
            localStorage.removeItem("carrito");
        }
    }

    renderCarrito();
    actualizarCarritoVisible();
});

/**
 * Handler para agregar un producto desde un botón.
 * @method onAgregar
 * @param {string} nombre - Nombre del producto
 * @param {number} precio - Precio unitario
 * @return {void}
 */
window.onAgregar = (nombre, precio) => {
    agregarAlCarrito(nombre, Number(precio), 1);
    resaltarProducto(nombre);
};

/**
 * Resalta visualmente el producto agregado en el catálogo.
 * @method resaltarProducto
 * @param {string} nombre - Nombre del producto agregado
 * @returns {void}
 */
const resaltarProducto = (nombre) => {
    const productos = document.querySelectorAll(".producto h3");
    const match = Array.from(productos).find(
        h3 => h3.textContent.trim().toLowerCase() === nombre.toLowerCase()
    );
    if (match) {
        const card = match.closest(".producto");
        card.classList.add("producto-destacado");
        setTimeout(() => card.classList.add("fade"), 200);
        setTimeout(() => {
            card.classList.remove("producto-destacado", "fade");
        }, 800);
    }
};

/**
 * Handler de envío del buscador (form).
 * @method onBuscarSubmit
 * @param {Event} e - Evento submit del formulario
 * @return {void}
 */
window.onBuscarSubmit = (e) => {
    e.preventDefault();
    const inputBuscar = document.getElementById("buscar");
    const q = (inputBuscar.value || "").trim().toLowerCase();
    if (!q) { alert("Escribí el nombre de un producto para buscar."); inputBuscar.focus(); return; }
    const productos = Array.from(document.querySelectorAll(".producto h3"));
    const match = productos.find(h3 => h3.textContent.toLowerCase().includes(q));
    if (match) {
        match.closest(".producto").scrollIntoView({ behavior: "smooth", block: "center" });
        match.closest(".producto").style.outline = "2px solid #9a5534";
        setTimeout(() => { match.closest(".producto").style.outline = ""; }, 1200);
    } else {
        alert("No se encontraron productos con ese nombre.");
    }
    e.target.reset();
};

/**
 * Vacía el carrito desde el botón.
 * @method onVaciar
 * @return {void}
 */
window.onVaciar = () => {
    carrito.length = 0;
    renderCarrito();
    localStorage.removeItem("carrito");
};

/**
 * Confirma el pedido desde el botón.
 * @method onConfirmar
 * @return {void}
 */
window.onConfirmar = () => {
    const formPedido = document.getElementById("form-pedido");
    const inpNombre = document.getElementById("nombre");
    const inpMesa = document.getElementById("mesa");
    const selPago = document.getElementById("pago");

    if (carrito.length === 0) { alert("Tu carrito está vacío."); return; }
    const nombre = (inpNombre.value || "").trim();
    if (!nombre) { alert("Ingresá tu nombre."); inpNombre.focus(); return; }
    if (!validarEnteroNoNegativo(inpMesa) || Number(inpMesa.value) < 1) { alert("Ingresá un número de mesa válido (>=1)."); inpMesa.focus(); return; }
    if (!selPago.value) { alert("Elegí un método de pago."); selPago.focus(); return; }

    let resumen = "Pedido confirmado:\n";
    carrito.forEach(item => { resumen += `${item.nombre} x${item.cantidad} = $${item.precio * item.cantidad}\n`; });
    resumen += `Total: $${document.getElementById("total").textContent}\n`;
    resumen += `Nombre: ${nombre}\nMesa: ${inpMesa.value}\nPago: ${selPago.options[selPago.selectedIndex].text}`;

    alert(resumen);
    alert("En unos momentos alguien se acercará a su mesa a cobrarle y posteriormente le traerán el pedido.");

    carrito.length = 0;
    renderCarrito();
    localStorage.removeItem("carrito");
    formPedido.reset();
};
