

const cartas=[1,2,3,4,5,6,7,8,9,10];

 //console.log (cartas[posicion]);
function obtenerItems(cartas,posicion){
   let cartasp=cartas;
   let pos=cartas[posicion];
   let result= pos;

   return pos;
}

console.log(obtenerItems(cartas,5));

//cambie una carta de la pila 
function setItem(cards,position,replacementCard){
    let car=cards;
    let posi=position;
    let replace=replacementCard;
    let result;
    let reemplazo=car.splice(position,1,replacementCard);
    result=reemplazo;

    return cards;
}

console.log(setItem(cartas,4,6));

//insertar una carta en la parte superior de la pila 

function insertItemATop(cards, newCard){
    /*let cards1=cards;
    let newCard=newCard*/

    let newStack= cards.push(newCard);
    return cards;
}
console.log (insertItemATop(cartas,11));

//insertar una carta en la parte inferior de lapila
 function insertItemAtBottom(cards,newCard){
     cards.unshift(newCard);
     console.log(cards);
     cards.unshift(newCard);
     console.log(cards);
     cards.unshift(newCard);
     console.log(cards);
     cards.unshift(newCard,newCard);
     console.log(cards);

 }
 console.log (insertItemAtBottom(cartas,1));

//eliminar un elemento de la pila

function removeItem(cards, position){
    //eliminar el primer valor del array
    cards.splice(position,1);
    console.log(cards);

    return cards;
}
console.log(removeItem(cartas,1));

//eliminar el último elemento de la pila

function removeItemFromTop(cards){
    cards.pop();
    return cards;
}
console.log (removeItemFromTop(cartas));

//verificar el tamaño de la pila 
function checkSizeOfStack(cards, stackSize){
    let result;
   
    if (cards.length==stackSize){
        result=true;
    }
    else{
        result=false;
    }
    return console.log('el tamaño de el array es '+cards.length+' '+result);
}
console.log(checkSizeOfStack([1,2,4,5],5));