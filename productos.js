const shopContent = document.getElementById("shopContent");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");
const productos = [
    {
      id: 1,
      nombre: "Bota",
      precio: 35000,
      cantidad: 1,
      img:"/img/bota_walker.png",
    },
    {
      id: 2,
      nombre: "Baston",
      precio: 32000,
      cantidad: 1,
      img:"/img/baston_silfab.png",
    },
    {
      id: 3,
      nombre: "Muleta",
      precio: 10000,
      cantidad: 1,
      img:"/img/muleta_dema.jpg",
    },
    {
      id: 4,
      nombre: "Sugetador_rodilla",
      precio: 30000,
      cantidad: 1,
      img:"/img/sugetador_de_rodilla.jpg",
    },
  ];

  let carrito = [];
  window.addEventListener("load",cargarProductos)
   function cargarProductos(){
    productos.forEach(product =>{ 
      const divCol= document.createElement("div")
      divCol.className= "col"
      const divCard= document.createElement("div")
      divCard.className= "card"
      const img= document.createElement("img")
      img.className= "card-img-top"
      img.src=product.img
      const divBody= document.createElement("div")
      divBody.className= "card-body"
      const h5= document.createElement("h5")
      h5.className="card-title"
      h5.innerText= product.nombre
      const precio= document.createElement("p")
      precio.id= "price"
      precio.innerText="$"+ product.precio
      const boton= document.createElement("a")
      boton.className="btn btn-primary"
      boton.href="#"
      boton.innerText= "comprar"
      divBody.appendChild(h5)
      divBody.appendChild(precio)
      divBody.appendChild(boton)
      divCard.appendChild(img)
      divCard.appendChild(divBody)
      divCol.appendChild(divCard)
      shopContent.appendChild(divCol)
    })
   }
  /*productos.forEach((product)=>{
    shopContent.innerHTML +=`
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}<p>
    <button class="button"> Comprar </button>
    ` 
    
    
    
    /*comprar.addEventListener("click", () => {
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

      
  })*/