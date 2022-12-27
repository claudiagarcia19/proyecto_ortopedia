function menuPrincipal() {
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

menuPrincipal()