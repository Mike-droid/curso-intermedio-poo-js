const objetito = {
  name: 'Miguel',
  email: 'miguel@gmail.com',
  age: 22
}

console.table(Object.keys(objetito))
console.table(Object.getOwnPropertyNames(objetito)) //*Hace lo mismo que el método de arriba
console.table(Object.entries(objetito)); //*Devuelve un array, cada posición es otro array con las propiedades del objeto
console.table(Object.getOwnPropertyDescriptors(objetito)); //*Devuelve un objeto con las propiedades del objeto

//* Podemos modificar las propiedades del objeto