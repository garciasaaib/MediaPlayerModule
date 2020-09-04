console.log('Hello Typescript')

// boolean
// si decimos que una variable es de un tipo, 
// el asignarle otro valor de otro tipo nos genera error
let muted: boolean = true
muted = false;

// number 
// el tipado se va heredando
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

// Script
// la siguiente variable recuerda que es un string
let nombre: string = 'Adrian'
let saludo = `Hola me llamo ${nombre}`
console.log(saludo)

// arrays
// al poner un punto despues de la variable 
// me sugiere los metodos que tiene al ser un array
let people: string[] = [] // declaramos un array vacio
people = ['Adrian', 'Isabel', 'Estela']
people.push('9000')
console.log(people)

// array con strings and numbers
let peoplenumbers: Array< string | number > = []
peoplenumbers.push('Adrian') 
peoplenumbers.push(9000) 
console.log(peoplenumbers)


// enum 
// es un tipo de valor al que no se le pueden adicionar espacios
// enum es como un objeto, esta formado por keys y values
// si no se le asigna un value su valor sera el de su enumeracion
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul'
}
let colorFavorito: Color = Color.Rojo
console.log(`mi color favorito es ${colorFavorito}`)


// any
// cuando no sabemos que es lo que regresa una variable
// esa variable puede cambiar a lo que quieras que cambie
let comodin: any = "Joker"
comodin = { type: 'Wildcard' }


// object
let some: object = { type: 'Wildcard' }
console.log(some)


// funciones
function add(a: number, b: number):number {
  return a + b
}

// closure 
// function functionName (prop: type): (thisFunctionReturns) => nestedFunctionReturns {
function createAdder (a: number): (number) => number {
  return function (b: number) {
    return b + a;
  }
} 
const addFour = createAdder(4)
const plusSix = addFour(6) //closures


// funciones con datos no estrictos
// con ? 
function fullname(first: string, last: string = 'Simpsomps'): string {
  return `${first} ${last}`
}
const adrian = fullname('Adrian')
console.log(adrian)

enum Colors {
  rojo = 'Rojo',
  verde = 'Verde'
}

// interfases
interface Rectangulo {
  // propiedades tipadas
  ancho: number
  alto: number
  color: Color
}

// objeto tipo Rectangulo
// tienes que declarar las propiedades qe requiere
let rect: Rectangulo = {
  ancho: 4,
  alto: 5,
  color: Color.Azul
}

// funcion que recibe un argumento r que es tipo Rectangulo
// y que va a regresar un valor tipo number
function area(r: Rectangulo): number {
  return r.alto * r.ancho
}

// corremos la funcion y lo obtenido lo ponemos en una variable
const areaRect = area(rect)
console.log(areaRect)


// a las interfaces no podemos añadirle propiedades pero 
// podemos hacer referencia a el como this en funciones
// y estas funciones serán heredadas al objeto
rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())