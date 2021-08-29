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