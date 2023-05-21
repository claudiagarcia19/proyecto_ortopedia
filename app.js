const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const modalBody = document.getElementById("modal-body")

/*function menuPrincipal() {
  let total = 0;
  let menu;
  do {
    menu = prompt("1-comprar\n 2-Alquilar\n 3-cerrar-cuenta\n 4-salir");
    menu = parseInt(menu);
    switch (menu) {
      case 1:
        total = total + comprarProtesis();
        break;
      case 2:
        total = total + alquilerProtesis();
        break;
      case 3:
        alert("el total acumulado " + total);
        total = 0;
        break;
      case 4:
        alert("saliendo");
        break;
      default:
        alert("opcion invalida");
    }
  } while (menu != 4);
}

function comprarProtesis () {
    let acumulador = 0;
    alert("selecione las opciones para obtener su presupuesto")
    alert ("1-bota\n 2-baston\n 3-muleta")
    let tipo = prompt("ingrese tipo de protesis que desea adquirir")
    tipo = parseInt(tipo)
    switch (tipo) {
        case 1:acumulador = acumulador + 35000
            break
        case 2:acumulador = acumulador + 32000    
            break;
        case 3: acumulador = acumulador + 10000
            break
        default: alert("opcion invalida")
    }
    return acumulador
}
function alquilerProtesis () {
    let acumulador = 0;
    alert("selecione las opciones para obtener su presupuesto")
    alert ("1-30Dias\n 2-15Dias")
    let tipo = prompt("ingrese tipo de protesis que desea alquilar")
    tipo = parseInt(tipo)
    switch (tipo) {
        case 1: acumulador = acumulador + 15000
            break
        case 2: acumulador = acumulador + 12000    
            break;
        default: alert("opcion invalida")
    }
    return acumulador
}   

menuPrincipal()*/




let carrito = [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p class= "price">${product.precio} $</p>
  `;
  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    console.log("hola");
    carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
      cantidad: product.cantidad,
    });
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    carrito = JSON.parse(localStorage.getItem("carrito"));
  });
  
});

verCarrito.addEventListener("click", () => {
  console.log("hola")
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
   <h1 className= "modal-header-title">carrito.</h1>  
   `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button";

  modalHeader.append(modalButton);

  carrito.forEach((product) => {
    console.log("hola")
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
     <img src= "${product.img}">
     <h3>${product.nombre}</h3>
     <p class= "price">${product.precio} $</p>
     `;

    modalContainer.appendChild(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = ` total a pagar: ${total} $`;
  modalContainer.append(totalBuying);
});




/*const shopContent = document.getElementById("shopContent");

const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      carrito.map((prod) => {
        if (prod.id === product.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal();
    }
  });
});

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item*/
