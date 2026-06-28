//  PRODUCTOS 
const form = document.getElementById("formProductos");
const lista = document.getElementById("listaProductos");
const mensaje = document.getElementById("mensaje");
const total = document.getElementById("total");

let contador = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const categoria = document.getElementById("categoria").value.trim();

    // Validación
    if (!nombre || !descripcion || !categoria) {
        mensaje.innerHTML = `<div class="alert alert-danger">Todos los campos son obligatorios.</div>`;
        return;
    }

    mensaje.innerHTML = `<div class="alert alert-success">Producto agregado correctamente.</div>`;

    // Crear elemento dinámico
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
    <div>
      <strong>${nombre}</strong> - ${descripcion} 
      <span class="badge bg-info">${categoria}</span>
    </div>
    <button class="btn btn-danger btn-sm eliminar">Eliminar</button>`;

    lista.appendChild(li);
    contador++;
    total.textContent = contador;

    form.reset();

    // Evento eliminar
    li.querySelector(".eliminar").addEventListener("click", function () {
        lista.removeChild(li);
        contador--;
        total.textContent = contador;
    });
});


// CONTACTO 
const formContacto = document.getElementById("formContacto");
const listaContactos = document.getElementById("listaContactos");
const mensajeContactoValidacion = document.getElementById("mensajeContactoValidacion");
const totalContactos = document.getElementById("totalContactos");

let contadorContactos = 0;

formContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreContacto").value.trim();
    const correo = document.getElementById("correoContacto").value.trim();
    const mensaje = document.getElementById("mensajeContacto").value.trim();

    // Validación
    if (!nombre || !correo || !mensaje) {
        mensajeContactoValidacion.innerHTML = `<div class="alert alert-danger">Todos los campos son obligatorios.</div>`;
        return;
    }

    mensajeContactoValidacion.innerHTML = `<div class="alert alert-success">Contacto registrado correctamente.</div>`;

    // Crear elemento dinámico
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
    <div>
      <strong>${nombre}</strong> - ${correo} 
      <p>${mensaje}</p>
    </div>
    <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
  `;

    listaContactos.appendChild(li);
    contadorContactos++;
    totalContactos.textContent = contadorContactos;

    formContacto.reset();

    // Evento eliminar
    li.querySelector(".eliminar").addEventListener("click", function () {
        listaContactos.removeChild(li);
        contadorContactos--;
        totalContactos.textContent = contadorContactos;
    });
});
