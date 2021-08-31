# Curso Intermedio de Programación Orientada a Objetos en JavaScript

## Introducción

Requisitos:

- [Closures y scope](https://platzi.com/cursos/scope/)
- [Fundamentos de POO](https://platzi.com/cursos/oop/)
- [POO Básico en JS](https://platzi.com/cursos/javascript-poo/)

### ¿Qué hay dentro de los objetos en JavaScript?

## Profundicemos en los objetos

### Static: atributos y métodos estáticos en JavaScript

Con static podemos ahorrarnos la instanciación de objetos.

```typescript
class Patito {
  static sonidito: string = 'Cuak! 🦆';

  static hacerSonidito(): string {
    return 'Cuak! 🦆🦆';
  }
}

console.log(Patito.sonidito);
console.log(Patito.hacerSonidito());
```

```typescript
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
```

### Métodos estáticos del prototipo Object

Podemos definir nuestros propiedades estáticas:

```typescript
const Miguel = {
  name: "Miguel",
  age: 22,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse: string) {
    console.log('This:', this);
    console.log('This.approvedCourses:', this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

Object.defineProperty(Miguel, "prueba-NASA", {
  value: "👽",
  enumerable: true,
  writable: true,
  configurable: true
});

console.table(Object.getOwnPropertyDescriptors(Miguel));
```

### Object.defineProperty

```typescript
Object.defineProperty(Miguel, "prueba-NASA", {
  value: "👽",
  enumerable: true,
  //* Solo se muestra con getOwnPropertyDescriptors, pero no con Keys si tiene valor false
  writable: true,
  //* Lo podemos editar si tiene true, pero no si tiene false
  configurable: true
  //* Lo podemos borrar si tiene true, pero no si tiene false
});

console.table(Object.getOwnPropertyDescriptors(Miguel));

//* Object.seal(Miguel); //* Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
//* Object.freeze(Miguel); //* Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

```

## Cómo copiar objetos en JavaScript

### Cómo funciona la memoria en JavaScript

JS tiene 2 memorias, STACK y HEAP.

- Stack -> Es muy rápida pero de poco almacenamiento. Solamente guarda el nombre y el valor de las variables.
- Heap -> El nombre de la variable apunta a un "Object" en la memoria heap que es más lenta y puedes almacenar más información.

```typescript
const juanita = {
  age: 15,
  email: 'juanita@gmail.com'
}

const nath = juanita;

console.table({juanita, nath});

nath.age = 20;
nath.email = 'nath@gmail';
//! Hacer esto modifica a juanita, porque estamos modificando la misma referencia en la memoria

```

### Shallow copy en JavaScript

En resumen: Es muy desordenado copiar objetos porque cuando modificamos sus propiedes, se ven alteradas las de los otros objetos también.

```javascript
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
}

const obj2 = {};

for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1);

const obj4 = Object.create(obj1);
```

### JSON.parse y JSON.stringify

Estos métodos permiten hacer copias de objetos en JS. Pero no funcionan con métodos.

```javascript
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editaA(){
    this.a = 'AAAAA'
  }
}

const stringifiedComplexObject = JSON.stringify(obj1); //* Lo convierte en un string
const obj2 = JSON.parse(stringifiedComplexObject); //* Lo convierte en un objeto
```

## Recursividad en JavaScript

### Qué es recursividad

Es cuando una función se llama a sí misma. Tenemos que tener un caso base para que esta función se detenga.

Ejemplo básico:

```typescript
function recursiva(){
  if(/*validacion*/){
    // llamados recursivos
  } esle {
    // llamados normales, sin recursividad
  }
}


function recursiva(numerito: number): number {
  console.log(numerito);
  if (numerito < 5) {
    return recursiva(numerito + 1);
  } else {
    return 5;
  }
}

recursiva(0);

function recursiva(numbersArray: number[] | string[]): void {
  if (numbersArray.length !== 0) {
    const firstNum = numbersArray[0];
    console.log(`first number: ${firstNum}`);
    numbersArray.shift(); //* elimina el primer elemento del array
    recursiva(numbersArray);
  }
}

recursiva([9,8,7,6,5,4,3,2,1]);
recursiva(['😎','🤩','😜','🤑']);
```

[¿Cuándo usar recursividad?](https://infseg.com/informatica/recursividad-cuando-debo-utilizarla/)

### Deep copy con recursividad

```javascript
const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'AAAAA';
  }
};

function isObject(subject) {
  return typeof subject === 'object' && subject !== null;
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for(key in subject) {
    const keyIsObject = isObject(subject[key]);

    //*if else - if else
    keyIsObject ? copySubject[key] = deepCopy(subject[key]) : subjectIsArray ? copySubject.push(subject[key]) : copySubject[key] = subject[key];
  }

  return copySubject;
}

deepCopy(obj1);
```

## Abstracción y encapsulamiento sin prototipos

## Cómo identificar objetos

## Próximos pasos
