//requerir la librería
const filterSegment = require('pipe-segment-filter')
 
//función para filtrar los números negativos
function dropNegatives(func) {
  return filterSegment(function(num) {
    return num >= 0
  })
}

//asignamos la función a una constante 
const s = dropNegatives()

//manejamos los outputs con los números mayores a cero
s.output.on('data', function(n) { console.log('output ' + n )})

//filtramos los números menores a cero
s.filtered.on('data', function(n) { console.log('filtered ' + n )})
 
//ingresamos los datos a filtrar
s.input.write(-1)
s.input.write(6)
s.input.write(-5)
s.input.write(4)