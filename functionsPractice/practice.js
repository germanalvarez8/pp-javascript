// Dado un array de números, crea una función que utilice map para duplicar cada número en el array y devolver un nuevo array con los resultados.

var initArray = [1,3,2,5,2,3,5,1,2,3]
let arrayMultiplicator = (array) => {
    return array.map(number => number * 2)
}

console.log(arrayMultiplicator(initArray))

// Dado un array de números, crea una función que utilice filter para filtrar solo los números pares y devolver un nuevo array con esos números.

var initArray = [1,3,2,5,2,3,5,1,2,3]
let pairFilter = (list) => {
    return list.filter(number => number % 2 == 0)
}

console.log(pairFilter(initArray));

// Dado un array de objetos que representan libros, donde cada objeto tiene las propiedades titulo y autor
// crea una función que utilice find para encontrar un libro con un autor específico y devolver ese libro.

let libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen" },
    { titulo: "1984", autor: "Jane Austen" },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" }
];

let bookFinderByAuthor = (author) => {
    return libros.find(book => book.autor == author)
}

console.log(bookFinderByAuthor('Jane Austen'));

// Dado un array de personas, donde cada objeto tiene las propiedades nombre y edad,
// crea una función que utilice map para generar un nuevo array con los nombres de las personas en mayúsculas,
// luego utilice filter para filtrar solo las personas mayores de 18 años, y finalmente utilice find para encontrar la primera persona que tenga exactamente 25 años.

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 40 },
  { nombre: "Ana", edad: 15 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Sofía", edad: 28 },
  { nombre: "Carlos", edad: 45 },
  { nombre: "Laura", edad: 13 },
  { nombre: "David", edad: 19 },
  { nombre: "Elena", edad: 25 }
];

let upperCaseNames = (personList) => {
    return personList.map((person) => ({nombre: person.nombre.toUpperCase(), edad: person.edad}))
}

let getLegalPersons = (personList) => {
    return personList.filter(person => person.edad > 18)
}

let getQuarterCenturyPerson = (personList) => {
    return personList.find(book => book.edad == 25)
}

let upperNames = upperCaseNames(personas);
let legalPersons = getLegalPersons(personas);
let quarterCentury = getQuarterCenturyPerson(personas);

console.log(upperNames);
console.log(legalPersons);
console.log(quarterCentury);


// Dado un array de objetos que representan productos, donde cada objeto tiene las propiedades nombre, precio y descuento
// crea una función para calcular el precio final de cada producto después de aplicar el descuento
// luego filtrar solo los productos con un precio final mayor que 50
// finalmente utilice una función para  encontrar el primer producto que tenga un descuento del 20%.

let productos = [
  { nombre: "Camisa", precio: 30, descuento: 10 },
  { nombre: "Pantalón", precio: 50, descuento: 15 },
  { nombre: "Zapatos", precio: 80, descuento: 20 },
  { nombre: "Chaqueta", precio: 100, descuento: 25 },
  { nombre: "Bufanda", precio: 20, descuento: 5 },
  { nombre: "Gorra", precio: 15, descuento: 0 },
  { nombre: "Calcetines", precio: 10, descuento: 0 },
  { nombre: "Reloj", precio: 120, descuento: 30 },
  { nombre: "Bolsa", precio: 40, descuento: 10 },
  { nombre: "Gafas de sol", precio: 60, descuento: 15 }
];

let applyDiscount = (productList) => {
    return productList.map((product) => ({
        name: product.nombre,
        price: product.precio,
        discount: product.descuento,
        finalPrice: product.precio - ((product.precio * product.descuento) / 100)
    }))
}

let getProductsGreaterThan = (productList, limitPrice) => {
    return productList.filter((product) => product.finalPrice > limitPrice)
}

let getProductsWithDiscount = (productList, discount) => {
    return productList.find((product) => product.discount == discount)
}

let productListWithDiscount = applyDiscount(productos);
let expensiveProducts = getProductsGreaterThan(productListWithDiscount, 50)
let productWithDiscount = getProductsWithDiscount(productListWithDiscount, 20)

console.log(productListWithDiscount, expensiveProducts, productWithDiscount);