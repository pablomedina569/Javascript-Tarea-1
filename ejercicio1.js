// Ejercicio 1
function imprimirPiramide(num) {
    for (let i = 1; i <= num; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += j;
      }
      console.log(row);
    }
  }

  imprimirPiramide(6);
  imprimirPiramide(3); 

// Ejercicio 2
function elementosComunes(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

let array1 = ['rojo', 'azul', 'amarillo'];
let array2 = ['blanco', 'negro', 'rojo'];

let resultado1 = elementosComunes(array1, array2);
console.log(resultado1); // ['rojo']

let array3 = [4, 3, true, 'manzana'];
let array4 = ['pera', 3, false, true, 3, true];

let resultado2 = elementosComunes(array3, array4);
console.log(resultado2); // [3, true]

// Ejercicio 3
 
  //3.1
 /* class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }
 
  //3.2
  agregarProducto(producto) {
    this.productos.push(producto);
    this.montoTotal += producto.precio * producto.unidades;
  }
}

class Producto {
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
  }
}

const carrito = new Carrito();
const leche = new Producto("Leche", 2, 1);
carrito.agregarProducto(leche);
console.log(carrito); //

//3.3
class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }

  agregarProducto(producto) {
    try {
      const indiceProductoExistente = this.productos.findIndex(p => p.nombre === producto.nombre);
      if (indiceProductoExistente !== -1) {
        throw new Error(`Ya existe ${producto.nombre} con ${this.productos[indiceProductoExistente].unidades} unidades`);
      }

      this.productos.push(producto);
      this.montoTotal += producto.precio * producto.unidades;
    } catch (error) {
      console.log(error.message);
    }
  }
}


const azucar = new Producto("Azucar", 5, 2);
carrito.agregarProducto(azucar); // Agrega el producto "Azucar" al carrito
carrito.agregarProducto(azucar); // Muestra el mensaje "Ya existe Azucar con 2 unidades"
console.log(carrito);*/

 
//Ordenado para ejecutar resultado
//Producto
class Producto {
  constructor(nombre, precio, unidades) {
    this.nombre = nombre;
    this.precio = precio;
    this.unidades = unidades;
  }
}
//Carrito
class Carrito {
  constructor() {
    this.montoTotal = 0;
    this.productos = [];
  }
  //Agrego metodo con validación para no permitir duplicados
  agregarProducto(producto) {
    try {
      const indiceProductoExistente = this.productos.findIndex(p => p.nombre === producto.nombre);
      if (indiceProductoExistente !== -1) {
        throw new Error(`Ya existe ${producto.nombre} con ${this.productos[indiceProductoExistente].unidades} unidades`);
      }

      this.productos.push(producto);
      this.montoTotal += producto.precio * producto.unidades;
    } catch (error) {
      console.log(error.message);
    }
  }
}
//Creo carrito y producto
const carrito = new Carrito();
const leche = new Producto("Leche", 10, 1);
const azucar = new Producto("Azucar", 5, 2);
//Agrego productus al carrito
carrito.agregarProducto(leche);
console.log(carrito); // { montoTotal: 10, productos: [{ nombre: "Leche", precio: 10, unidades: 1 }] }

carrito.agregarProducto(azucar);
console.log(carrito); // { montoTotal: 20, productos: [{ nombre: "Leche", precio: 10, unidades: 1 }, { nombre: "Azucar", precio: 5, unidades: 2 }] }

carrito.agregarProducto(azucar); // Muestra el mensaje "Ya existe Azucar con 2 unidades"
console.log(carrito); // { montoTotal: 20, productos: [{ nombre: "Leche", precio: 10, unidades: 1 }, { nombre: "Azucar", precio: 5, unidades: 2 }] }