fetch("../datos/vehiculos.json")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("vehiculos-container");
    data.forEach(v => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-vehiculo";
      tarjeta.innerHTML = `
        <img src="../imagenes/${v.imagen}" alt="${v.nombre}">
        <div class="informacion-vehiculo">
            <h3>${v.nombre}</h3>
            <p>Tipo: ${v.tipo}</p>
            <p>Kilómetros: ${v.kilometros}</p>
            <p>Matrícula: ${v.matricula}</p>
            <p>Precio: ${v.precio}</p>
            <p class="${v.estado.toLowerCase()}">${v.estado}</p>
        </div>
      `;
      contenedor.appendChild(tarjeta);
    });
  })
  .catch(err => console.error("Error al cargar los vehículos:", err));
