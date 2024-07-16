'use strict';
// Escribir una función que reciba como parámetros el siguiente array anterior, y el titulo de un libro.
//  Convertir los elementos en objetos agregando la las clave id (numero autoincremental que empieza en 1) y title. 
//   Devolver el valor de id correspondiente al titulo recibido como parámetro.

function createListObject(arr, search) {
    //Objeto de libro
    function Book(id, title) {
        this.id = id
        this.title = title
    }

    //Filtar libros que tenga el titulo
    let filter = arr.filter(title => title.toLowerCase().includes(search.toLowerCase()))
    
    let result = []

    //cada elemnto se pasa a objeto
    filter.map(el => result.push(new Book( filter.indexOf(el) + 1 , el)))

    return result //la salida sale [Book{id:1, title: titulo}, Book{id:2, title: titulo} ... Book{id:n, title: titulo}]
}

console.log(createListObject(programmingBooks, 'Git'))