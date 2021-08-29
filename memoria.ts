const juanita = {
  age: 15,
  email: 'juanita@gmail.com'
}

const nath = juanita;

console.table({juanita, nath});

nath.age = 20;
nath.email = 'nath@gmail';
//! Hacer esto modifica a juanita, porque estamos modificando la misma referencia en la memoria
