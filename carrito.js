const verCarrito = document.getElementById("verCarrito");

const btnmodal = document.getElementById('btnmodal');
const mymodal = document.getElementById('myModal'); ///mi modal
const tabla = document.getElementById('items');
const total = document.getElementById('total');

///lista de elementos que vamos a utilizar
let carrito = [] ///lista de items
let productos = [];

productos.push(new Producto('bota',35000));
productos.push(new Producto('baston', 3200));
productos.push(new Producto('muleta', 10000));
productos.push(new Producto('sugetador_rodilla', 30000));



///popule el carrito
carrito.push(new Item(productos[0],2));
carrito.push(new Item(productos[1],3));
carrito.push(new Item(productos[2],1));


///agregar el eventListener de vaciar el carrito
///agregar el eventListener de ordenar el carrito
////agregar el eventListener de aplicar descuento


function newRow(nuevoItem)
{
 const row = document.createElement('tr'); ///creo la fila
 const posCarrito = carrito.indexOf(nuevoItem);

 ///celda nombre
 let td = document.createElement('td');
 td.textContent = nuevoItem.producto.nombre;
 row.appendChild(td);

 td = document.createElement('td');
 td.textContent = nuevoItem.cantidad;
 row.appendChild(td);

 ///agregar un boton de incrementar cantidad y un boton de decrementar cantidad.

 td = document.createElement('td');
 td.textContent = nuevoItem.producto.precio;
 row.appendChild(td);

 ///creo el boton de eliminar
 const btnEliminar = document.createElement('button');
 btnEliminar.className = 'btn btn-danger';
 btnEliminar.innerText = 'Eliminar';
 btnEliminar.onclick = () =>
 {
    carrito.splice(posCarrito,1); ///elimino ese elemento en esa posicion
    localStorage.setItem('carrito',JSON.stringify(carrito)); //actualizo localStorage
    actualizarTablaCarrito();
 }

 ///agrego el boton a una celda
 td = document.createElement('td');
 td.appendChild(btnEliminar);
 ///agrego la celda como hijo de la row
 row.appendChild(td);

tabla.appendChild(row); //a la tabla le agrego la nueva row

////calcular el total
total.innerText = carrito.reduce((acumulador,item) => acumulador + item.cantidad*item.producto.precio,0);
}



function actualizarTablaCarrito()
{
  tabla.innerHTML = ''; ///limpie la tabla
  total.innerText = 0; ///el total lo dejo en 0
  carrito.forEach((item) =>  ///por cada item se genera una row
  {
    newRow(item);
  })
}


///evento que escucha cuando se muestra el modal
$('#myModal').on('shown.bs.modal', () =>
{
    actualizarTablaCarrito();
   
})



/*const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
      `;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
    carrito.forEach((product) => {
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
          <img src="${product.img}">
          <h3>${product.nombre}</h3>
          <p>${product.precio} $</p>
          <span class="restar"> - </span>
          <p>${product.cantidad}</p>
          <span class="sumar"> + </span>
          <p>Total: ${product.cantidad * product.precio} $</p>
          <span class="delete-product"> ❌ </span>
        `;
  
      modalContainer.append(carritoContent);
  
      let restar = carritoContent.querySelector(".restar");
  
      restar.addEventListener("click", () => {
        if (product.cantidad !== 1) {
          product.cantidad--;
        }
        saveLocal();
        pintarCarrito();
      });
  
      let sumar = carritoContent.querySelector(".sumar");
      sumar.addEventListener("click", () => {
        product.cantidad++;
        saveLocal();
        pintarCarrito();
      });
  
      let eliminar = carritoContent.querySelector(".delete-product");
  
      eliminar.addEventListener("click", () => {
        eliminarProducto(product.id);
      });
  
      // let eliminar = document.createElement("span");
      // eliminar.innerText = "❌";
      // eliminar.classList = "delete-product";
      // carritoContent.append(eliminar);
  
      // eliminar.addEventListener("click", eliminarProducto);
    });
  
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
  
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
  };
  
  verCarrito.addEventListener("click", pintarCarrito);
  
  const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
  
    console.log(foundId);
  
    carrito = carrito.filter((carritoId) => {
      return carritoId !== foundId;
    });
  
    carritoCounter();
    saveLocal();
    pintarCarrito();
  };
  
  const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
  
    const carritoLength = carrito.length;
  
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
  };
  
  carritoCounter();*/