"use strict";
console.log(" hola Juan, si");
let estudiasteJS = true; //boolean no va a aparecer en la compilación de js por que no soporta los tipados pero ts si
estudiasteJS
    ? console.log("podes seguir aprendiendo")
    : console.log("TS MUST BE LEARND");
let equipo1 = 11;
let equipo2 = 11;
let Messi = 1;
let Motivo = "";
function jugar(equipo1 = 11, equipo2 = 11) {
    if (equipo1 > equipo2)
        (Motivo = "por que juega Messi"), console.log(`gana equipo1 ${Motivo}`);
    else if (equipo1 === equipo2) {
        console.log(" empatan");
    } //void es por si no va a devolver nada, funcion con valores por defecto, sino pondemos void no pasa nada , no hay error
}
//al definir los tipos por ej Messi. (automaticamente va a dar solamente los metodos de string), detecta el tipo, lo mismo con cada tipo de otra variable
// si el dato que esperamos por ejemplo del back end, puede ser dependiendo la respuesta por ejemplo
// esperamos un numero pero si hubo un error llega un msj string. en ese caso
// let datoEsperado: number | string;
// any es un tipo de dato que hay que tratar de evitarlo, se puede poner para salir de paso
//pero luego hay que tratar de tiparlo, any puede ser cualquier tipo de dato y para eso usá js, pero si vas a usar ts
//tenes que tratar que el tipo de datos sea más estructurado, más solido más rígido, vamos a ver para que sirve
//con any se puede reasignar el tipo de dato de la variable, lo mismo creo con unknow; ts config se puede configurar para que 
// no infiera que es any es decir que lance error si ponemos any
// con any podemos saltear las validaciones de tipado de ts
