// carrito.js

// Arreglo para almacenar productos en el carrito
let carrito = [];

// Función para añadir productos al carrito
function agregarAlCarrito(producto, precio) {
    const cantidad = 1; // Puedes ajustar esto según tus necesidades
    const total = precio * cantidad;

    // Verificar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.producto === producto);
    
    if (index !== -1) {
        // Si el producto ya está en el carrito, actualizar la cantidad y total
        carrito[index].cantidad += cantidad;
        carrito[index].total += total;
    } else {
        // Si el producto no está en el carrito, añadirlo
        carrito.push({ producto, precio, cantidad, total });
    }

    // Actualizar la tabla de productos en el carrito
    actualizarTablaCarrito();

    // Calcular el total y mostrarlo
    calcularTotal();
}

// Función para actualizar la tabla de productos en el carrito
function actualizarTablaCarrito() {
    const tablaCarrito = document.getElementById("tablaCarrito");
    // Limpiar la tabla
    tablaCarrito.innerHTML = "<tr><th>Producto</th><th>Precio</th><th>Cantidad</th><th>Total</th><th>Eliminar</th></tr>";
    
    // Añadir filas con los productos en el carrito
    carrito.forEach(item => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.producto}</td>
            <td>${item.precio.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>${item.total.toFixed(2)}</td>
            <td><button onclick="eliminarDelCarrito('${item.producto}')">Eliminar</button></td>
        `;
        tablaCarrito.appendChild(fila);
    });
}

// Función para calcular y mostrar el total del carrito
function calcularTotal() {
    const totalElemento = document.getElementById("total");
    const total = carrito.reduce((acc, item) => acc + item.total, 0);
    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
    carrito = carrito.filter(item => item.producto !== producto);
    actualizarTablaCarrito();
    calcularTotal();
}

// Función de compra simulada
function comprar() {
    // Aquí podrías implementar la lógica de compra real
    alert('Gracias por tu compra. Se ha realizado con éxito.');
    // Limpiar el carrito después de la compra
    carrito = [];
    actualizarTablaCarrito();
    calcularTotal();
}
