/**
 * Valida que el número ingresado sea entero y no negativo.
 * Si está mal, muestra un mensaje y borra el campo.
 */
const validarEnteroNoNegativo = (input) => {

    // Convertimos el valor del input a número
    const v = Number(input.value);

    // Chequeamos que sea un número real, entero y mayor o igual a 0
    const ok = Number.isFinite(v) && v >= 0 && Number.isInteger(v);

    // Si el valor NO es válido:
    if (!ok) {
        alert("Ingresá un número entero válido (>= 0).");
        input.value = "";     // vaciamos el campo
        input.focus();        // ponemos el cursor en ese campo
    }

    return ok; // devolvemos si pasó todas las validaciones
};



/**
 * Calcula el precio total después de aplicar un descuento.
 */
const calcularTotal = (precio, cantidad, descuento) => {

    const sub = precio * cantidad;         // subtotal sin descuento
    const desc = sub * (descuento / 100);  // cuánto se descuenta

    // Restamos el descuento y nos aseguramos que no dé negativo
    return Math.max(0, Math.round(sub - desc));
};



/**
 * Carrito donde se van guardando los productos seleccionados.
 * Cada elemento tiene: nombre, precio y cantidad.
 */
const carrito = [];



/**
 * Agrega un producto al carrito.
 * Si el producto ya estaba, solo suma la cantidad.
 */
const agregarAlCarrito = (nombre, precio, cantidad) => {

    // Buscamos si ya existe un producto con ese nombre
    const idx = carrito.findIndex(i => i.nombre === nombre);

    if (idx >= 0) {
        carrito[idx].cantidad += cantidad;   // si existe → sumamos cantidad
    } else {
        carrito.push({ nombre, precio, cantidad }); // si no → lo agregamos
    }

    renderCarrito(); // actualizamos visualmente el carrito
};



/**
 * Dibuja el carrito en pantalla.
 * Muestra los productos, los subtotales, el total, y si está vacío.
 */
const renderCarrito = () => {

    const ul = document.getElementById("productoscarrito"); // lista donde mostramos productos
    const totalEl = document.getElementById("total");       // total del carrito
    const empty = document.getElementById("carritovacio");  // texto "carrito vacío"

    ul.innerHTML = ""; // limpiamos la lista

    // Si el carrito está vacío:
    if (carrito.length === 0) {
        empty.style.display = "block";  // mostramos mensaje vacío
        totalEl.textContent = "0";      // total en cero
    } else {

        empty.style.display = "none";   // ocultamos mensaje

        let total = 0;

        carrito.forEach((item, i) => {
            const li = document.createElement("li");

            const sub = item.precio * item.cantidad; // subtotal del producto
            total += sub; // sumamos al total general

            // Creamos el contenido del item
            li.innerHTML = `
                <span>${item.nombre} (x${item.cantidad})</span>
                <span>$ ${sub} <button class="btn-borrar" data-index="${i}">🗑</button></span>
            `;

            ul.appendChild(li); // agregamos el item a la lista
        });

        totalEl.textContent = String(total); // mostramos el total final
    }

    actualizarCarritoVisible(); // mostramos/ocultamos botones según el contenido
    localStorage.setItem("carrito", JSON.stringify(carrito)); // guardamos carrito en memoria del navegador
};



/**
 * Muestra u oculta botones y formulario dependiendo
 * de si el carrito tiene productos o no.
 */
const actualizarCarritoVisible = () => {

    const btnVaciar = document.getElementById("vaciar");
    const btnConfirmar = document.getElementById("confirmar");
    const formPedido = document.getElementById("form-pedido");

    const tieneProductos = carrito.length > 0; // booleano

    if (tieneProductos) {
        btnVaciar.style.display = "inline-block";
        btnConfirmar.style.display = "inline-block";
        formPedido.style.display = "block";   // mostramos el formulario
    } else {
        btnVaciar.style.display = "none";
        btnConfirmar.style.display = "none";
        formPedido.style.display = "none";    // ocultamos el formulario
    }
};



/**
 * Se ejecuta cuando la página termina de cargar.
 * Aquí conectamos los botones, restauramos el carrito guardado, etc.
 */
document.addEventListener("DOMContentLoaded", () => {

    /**
     * Permite borrar productos haciendo clic en el botón 🗑.
     */
    document.getElementById("carrito").addEventListener("click", (e) => {
        const target = e.target;

        // Si clickeaste un botón para borrar:
        if (target.classList.contains("btn-borrar")) {
            const i = Number(target.getAttribute("data-index")); // índice guardado en data-index
            carrito.splice(i, 1); // sacamos ese producto del carrito
            renderCarrito(); // actualizamos
        }
    });

    // Guardamos referencias a inputs del formulario de pedido
    const formPedido = document.getElementById("form-pedido");
    const inpNombre = document.getElementById("nombre");
    const inpMesa = document.getElementById("mesa");
    const selPago = document.getElementById("pago");

    // Si hay carrito guardado en el navegador, lo recuperamos
    const guardado = localStorage.getItem("carrito");
    if (guardado) {
        try {
            const datos = JSON.parse(guardado);
            if (Array.isArray(datos)) carrito.push(...datos);
        } catch {
            localStorage.removeItem("carrito"); // si hubo error, borramos
        }
    }

    renderCarrito();           // actualizamos la vista
    actualizarCarritoVisible(); // ajustamos qué se muestra
});



/**
 * Se ejecuta cuando toca el botón "Agregar" en cualquier producto.
 */
window.onAgregar = (nombre, precio) => {

    agregarAlCarrito(nombre, Number(precio), 1); // agregamos de a 1 unidad
    resaltarProducto(nombre);                    // efecto visual en el catálogo
};



/**
 * Marca visualmente el producto que se acaba de agregar al carrito.
 * Le da un borde y un fondo que se desvanecen.
 */
const resaltarProducto = (nombre) => {

    // Buscamos todos los títulos <h3> de productos
    const productos = document.querySelectorAll(".producto h3");

    // Buscamos el <h3> cuyo texto coincida con el nombre
    const match = Array.from(productos).find(
        h3 => h3.textContent.trim().toLowerCase() === nombre.toLowerCase()
    );

    if (match) {
        const card = match.closest(".producto"); // obtenemos el bloque completo del producto

        card.classList.add("producto-destacado"); // aplicamos la clase que resalta

        setTimeout(() => card.classList.add("fade"), 200); // empieza a desvanecerse

        // Quitamos el resaltado después de la animación
        setTimeout(() => {
            card.classList.remove("producto-destacado", "fade");
        }, 800);
    }
};



/**
 * Se ejecuta cuando enviás el formulario de "buscar producto".
 */
window.onBuscarSubmit = (e) => {

    e.preventDefault(); // evitamos que recargue la página

    const inputBuscar = document.getElementById("buscar");

    // Texto buscado (limpio y en minúsculas)
    const q = (inputBuscar.value || "").trim().toLowerCase();

    if (!q) { 
        alert("Escribí el nombre de un producto para buscar."); 
        inputBuscar.focus(); 
        return; 
    }

    // Buscamos coincidencias en los <h3> de productos
    const productos = Array.from(document.querySelectorAll(".producto h3"));
    const match = productos.find(h3 => h3.textContent.toLowerCase().includes(q));

    if (match) {
        // Movemos la pantalla hasta ese producto y lo resaltamos con outline
        match.closest(".producto").scrollIntoView({ behavior: "smooth", block: "center" });
        match.closest(".producto").style.outline = "2px solid #9a5534";

        // Quitamos el borde después de 1.2 segundos
        setTimeout(() => { match.closest(".producto").style.outline = ""; }, 1200);

    } else {
        alert("No se encontraron productos con ese nombre.");
    }

    e.target.reset(); // borramos el texto del buscador
};



/**
 * Vacía totalmente el carrito.
 */
window.onVaciar = () => {
    carrito.length = 0;               // borramos todos los elementos
    renderCarrito();                  // actualizamos la vista
    localStorage.removeItem("carrito"); // borramos el carrito guardado
};



/**
 * Confirma el pedido final.
 * Valida nombre, mesa y método de pago.
 * Luego muestra un resumen y vacía el carrito.
 */
window.onConfirmar = () => {

    const formPedido = document.getElementById("form-pedido");
    const inpNombre = document.getElementById("nombre");
    const inpMesa = document.getElementById("mesa");
    const selPago = document.getElementById("pago");

    // Validaciones
    if (carrito.length === 0) { alert("Tu carrito está vacío."); return; }

    const nombre = (inpNombre.value || "").trim();
    if (!nombre) { alert("Ingresá tu nombre."); inpNombre.focus(); return; }

    // Validamos número de mesa
    if (!validarEnteroNoNegativo(inpMesa) || Number(inpMesa.value) < 1) { 
        alert("Ingresá un número de mesa válido (>=1)."); 
        inpMesa.focus(); 
        return; 
    }

    if (!selPago.value) { alert("Elegí un método de pago."); selPago.focus(); return; }

    // Armamos resumen del pedido
    let resumen = "Pedido confirmado:\n";

    carrito.forEach(item => { 
        resumen += `${item.nombre} x${item.cantidad} = $${item.precio * item.cantidad}\n`; 
    });

    resumen += `Total: $${document.getElementById("total").textContent}\n`;
    resumen += `Nombre: ${nombre}\nMesa: ${inpMesa.value}\nPago: ${selPago.options[selPago.selectedIndex].text}`;

    alert(resumen);
    alert("En unos momentos alguien se acercará a su mesa a cobrarle y posteriormente le traerán el pedido.");

    carrito.length = 0;              // vaciamos carrito
    renderCarrito();                 // actualizamos la vista
    localStorage.removeItem("carrito");
    formPedido.reset();              // limpiamos formulario
};
