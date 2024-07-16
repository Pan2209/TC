let fruits = ["apple", "banana", "orange", "grape"];

// Agregar elementos al final del array
fruits.push("kiwi");
alert("Después de push: " + fruits); // ["apple", "banana", "orange", "grape", "kiwi"]

// Eliminar el último elemento del array
let removed = fruits.pop();
alert("Después de pop: " + fruits); // ["apple", "banana", "orange", "grape"]
alert("Elemento eliminado: " + removed); // "kiwi"

// Agregar elementos al inicio del array
fruits.unshift("pear", "peach");
alert("Después de unshift: " + fruits); // ["pear", "peach", "apple", "banana", "orange", "grape"]

// Eliminar el primer elemento del array
removed = fruits.shift();
alert("Después de shift: " + fruits); // ["peach", "apple", "banana", "orange", "grape"]
alert("Elemento eliminado: " + removed); // "pear"

// Revertir el orden de los elementos en el array
fruits.reverse();
alert("Después de reverse: " + fruits); // ["grape", "orange", "banana", "apple", "peach"]

// Obtener el índice de un elemento
let index = fruits.indexOf("banana");
alert("Índice de 'banana': " + index); // 2

// Copiar una porción del array
let copy = fruits.slice(1, 4);
alert("Copia del array: " + copy); // ["orange", "banana", "apple"]

// Ordenar el array alfabéticamente
fruits.sort();
alert("Después de sort: " + fruits); // ["apple", "banana", "grape", "orange", "peach"]

// Aplicar una función a cada elemento
    
// Alerts:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: grape
// Fruit 4: orange
// Fruit 5: peach