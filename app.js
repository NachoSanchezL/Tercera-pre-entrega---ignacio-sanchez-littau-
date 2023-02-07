const productos = [];
class Producto {
constructor(literal) {
this.id = productos.length;
this.nombre = literal.nombre;
this.precio = literal.precio;
this.cantidad = literal.cantidad;
this.vendido = false;
}

vender() {
    this.vendido = true;
    localStorage.setItem(`producto${this.id}`, JSON.stringify(this));
    productosVendidos.push(this);
    localStorage.setItem("productosVendidos", JSON.stringify(productosVendidos));
}
}
const formulario = document.createElement("form");
formulario.innerHTML = `<input type="text">
                        <input type="number">
                        <input type="number">
                        <input type="submit">`;
document.body.appendChild(formulario)

formulario.onsubmit = (e) => {
e.preventDefault();
const inputs = e.target.children;
productos.push(new Producto({ nombre: inputs[0].value, precio: inputs[1].value, cantidad: inputs[2].value }));
mostrarProductos(productos);
const btnProductos = document.getElementsByClassName('btnProducto');

for (const boton of btnProductos) {
    boton.onclick = (e) => {
        const seleccionado = productos.find(obj => obj.id == e.target.id);
        let notificacion = document.createElement("h6");
        notificacion.innerHTML = `Nombre  ${seleccionado.nombre} -  Precio $ ${seleccionado.precio} - Cantidad ${seleccionado.cantidad}`;
        salida.prepend(notificacion);
    }
}

const btnVender = document.getElementsByClassName('btnVender');
for (const boton of btnVender) {
    boton.onclick = (e) => {
        const seleccionado = productos.find(obj => obj.id == e.target.id);
        seleccionado.vender();
        console.log(seleccionado);
        let notificacion = document.createElement("h6");
        notificacion.innerHTML = `Nombre ${seleccionado.nombre} - VENDIDO`;
        salida.prepend(notificacion);
    }
}

}

function mostrarProductos(productos) {
salida.innerHTML = '';
for (const producto of productos) {
let divProducto = document.createElement("div");
divProducto.innerHTML = `<h2>${producto.nombre}</h2> <p> $ ${producto.precio} / ${producto.cantidad} </p> <button id='${producto.id}' class='btnProducto'>Seleccionar</button> <button id='${producto.id}' class='btnVender'>Vender</button>`
salida.appendChild(divProducto);
}
}

const productosVendidos = [];



console.log(productosVendidos);


const salida = document.createElement("div");
document.body.appendChild(formulario);
document.body.appendChild(salida);