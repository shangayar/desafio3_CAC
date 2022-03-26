/*** ITEM 2 ***/

class Persona{
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

var edades = [];
var personas = [];
var count = 0;
var getData = function(){
    var name = document.getElementById("nombre").value;
    var lastname = document.getElementById("apellido").value;
    var age = document.getElementById("edad").value;   
    console.log(name+" "+lastname+" "+age +" "+count);
    
    personas[count] = new Persona (name,lastname,age );
    console.log(personas[count]);
    edades[count] = personas[count].edad; 
    count++;   
}

var showMajor = function(){
    console.log(edades);
    let mayor = buscarMayor(edades);
    let pos = edades.indexOf(mayor);
    document.getElementById("mayor").innerHTML = `<h3>La persona de Edad mayor es: ${personas[pos].nombre} con ${mayor}</h3>`;

}

var showMinor = function(){
    let menor= buscarMenor(edades);
    let pos = edades.indexOf(menor);
    document.getElementById("menor").innerHTML = `<h3> La persona de Edad Menor es: ${personas[pos].nombre} con ${menor}</h3>`
}