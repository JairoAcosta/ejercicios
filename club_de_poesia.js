

function frontDoorResponse(valor){

    let oracion=valor;
    let letra=oracion.charAt(0);
    return letra;

}

function frontDoorPassword(word){
    
    let palabra=word.toUpperCase();

    let letra=palabra.slice(0,1);

    let minuscula=palabra.toLowerCase();
    
    return letra+minuscula.slice(1);
}

//console.log(frontDoorPassword('hola'));
const lineas=["hola","como ", "estas   "];

function backDoorResponse(line){
    let ultima=line.trimEnd();
    
    
    return ultima.slice(-1);
}
for(let i =0; i<lineas.length; i++){
    console.log(backDoorResponse(lineas[i]));
}

function backDoorPassword(word){
    let palabra=word+" ,please";
    let mayuscula=palabra.toUpperCase();
    return mayuscula;
}
let p="hola"
let p1=p.charAt(0);
let mayuscula=p1.toUpperCase();
let palabra=mayuscula+p.slice(1);
console.log(palabra+", mucho gusto");


