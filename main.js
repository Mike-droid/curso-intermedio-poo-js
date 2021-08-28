var Miguel = {
    name: "Miguel",
    age: 22,
    approvedCourses: ['Curso 1'],
    addCourse: function (newCourse) {
        console.log('This:', this);
        console.log('This.approvedCourses:', this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};
/* console.table(Object.keys(Miguel));
console.table(Object.getOwnPropertyNames(Miguel));
console.table(Object.entries(Miguel));
console.table(Object.getOwnPropertyDescriptors(Miguel));*/
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
