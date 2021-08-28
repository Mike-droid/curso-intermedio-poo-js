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

## Cómo copiar objetos en JavaScript

## Recursividad en JavaScript

## Abstracción y encapsulamiento sin prototipos

## Cómo identificar objetos

## Próximos pasos
