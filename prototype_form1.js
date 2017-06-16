/* 						PROTOTIPO

 	sí tenemos varios objetos que comparten la misma estructura
 	podemos crear un PROTOTIPO del cual podemos crear los objetos que queramos !

	KeyWord -> NEW -> se crea un nuevo objeto

 	los objetos se vinculan con otros a travéz de PROTOTYPE

 	En el navegador se puede ver como: PROTO
 	y mostrará el prototipo con el que fue creado

 	¿Qué hace JS ?

 		1.  Crear un objeto
 		2.  Llamar la función después de la palabra NEW
 		3.  Asigna al objeto this el objeto que se acaba de crear
 		4.  Retornar el objeto this

*/

function Punto(x, y){
	this.x = x             // Guarda los valores con this
	this.y = y             // this hace referencia al objeto que JS está creando con NEW
}

// Agregamos a la funcion Punto un tipo
// le ponemos la función para que sea un método
// moverEnX(x) -> esa x es lo que recibe
Punto.prototype.moverEnX = function moverEnX(x){
	this.x += x 
}
Punto.prototype.moverEnY = function moverEnY(y){
	this.y += y 
}
Punto.prototype.distancia = function distancia(p){
	const x = this.x - p.x 
	const y = this.y - p.y

	return Math.sqrt( x*x + y*y ) 
}

const p1 = new Punto(0, 4) // nuevo objeto y asigna el prototipo definido
const p2 = new Punto(3, 0) // luego ejecuta el codigo del prototipo y retorna el objeto que acaba de crear


console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)