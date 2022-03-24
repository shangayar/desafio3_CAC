/*
ITEM1:
Number.NEGATIVE_INFINITY -> representa el mismo valor negativo de la propiedad del objeto global Infinity.
En el proceso esta fijando como Max_num = -infinito dentro de la función, otra función similar es number.POSITIVE_INFINITY
 
La función find_max() recibe como parámetro objeto nums.
Luego realiza un "for of", aqui recorre cada valor desde el primer elemento hasta nums(que fue el parámetro ingresado)
Dentro del for of, se realiza una comparación para que num > max_num.
finalmente se retorna el valor máximo.
Los datos son almacenados dentro del objeto nums.
se obtiene el valor máximo dentro del objeto.
*/

/*** ITEM 2 ***/

class Alumno{
    constructor (nombre,apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

function buscarMayor(nums){
    let max_num = Number.NEGATIVE_INFINITY;
    for(let num of nums){
        if(num > max_num)
           max_num = num;
    }
    return max_num;
}

function buscarMenor(nums){
    let min_num = Number.POSITIVE_INFINITY;
    for(let num of nums){
        if(num < min_num)
           min_num = num;
    }
    return min_num;
}


let alumno1 = new Alumno("Jose","Perez",17);
let alumno2 = new Alumno("Maria","Lopez",25);
let alumno3 = new Alumno("Carlos","Vicente",13);
let alumno4 = new Alumno("Ornela","Saavedra",19);
let alumno5 = new Alumno("Pepito","Argento",18);

let edades = [alumno1.edad, alumno2.edad, alumno3.edad, alumno4.edad, alumno5.edad];

document.getElementById("mayor").innerHTML = `<h3>Edad del Alumno mayor es de: ${buscarMayor(edades)}</h3>`;
document.getElementById("menor").innerHTML = `Edad del Alumno mayor es de: ${buscarMenor(edades)}`

console.log(buscarMayor(edades));
console.log(buscarMenor(edades));