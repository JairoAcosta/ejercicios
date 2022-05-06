
//si el caballero esta dormido ataca
function canExecuteFastAttack(estado){
        let result=estado;
        let mensajes;
   if (result==true){
       mensajes= console.log("rescatar");
    }else{
       mensajes= console.log("Esperar que se duerman");
    }
    return mensajes,result;
}

const prueba=true;

console.log(canExecuteFastAttack(prueba));

//si alguno de los tres esta despierto puedes espiar.
function canSpy(caballero,arquero,prisionero){
    let cab=caballero;
    let arq=arquero;
    let pris=prisionero;
    let spy;
    let mensaje;

    if (cab==true|| arq==true ||pris ==true){
        spy =true;
        mensaje=console.log("puede espiar");
    }else{
        spy=false;
        mensaje= console.log("no tiene sentido espiar");
    }
    return cab,arq,pris,spy;
}

const caballero1=true;
const arquero1=true;
const prisionero1=false;

console.log(canSpy(caballero1,arquero1,prisionero1));

//arquero y prisionero despiertos
function canSignalPrisioner(arch,prisioner){
    let arquero=arch;
    let prisionero=prisioner;
    let result;

    if(arquero==true&&prisionero==true){
        result=true;
        console.log("puedes llamar al prisionero");
    }
    else{
        result=false;
        console.log("no puedes llamar al prisionero porque los joden a los dos");
    }
    return result;
}
let parm1=false;
let parm2=false;
console.log(canSignalPrisioner(parm1,parm2));



//comprobar si es posible liberar al prisionero

function canFreePrisoner( knightIsAwake,archerIsAwake,prisonerIsAwake, petDogIsPresent){
    let caballero=knightIsAwake;
    let arquero= archerIsAwake;
    let prisionero=prisonerIsAwake;
    let freePrisoner;
    
    if (caballero==true||arquero==true&&prisionero==true)
        freePrisoner=false;
    if(caballero==false && arquero==false &&prisionero==false &&petDogIsPresent==false){
        freePrisoner=false;
    }
      if (caballero==false && arquero==false && prisionero==true && petDogIsPresent==false){
        freePrisoner=true;
      }
     if (caballero==false && arquero==false && prisionero==false && petDogIsPresent==true){
       freePrisoner=true;
     }
      if (caballero==false && arquero==false && prisionero==true && petDogIsPresent==true){
       freePrisoner=true;
     }
      if (caballero==false && arquero==true && prisionero==false && petDogIsPresent==false){
       freePrisoner=false;
     }
      if (caballero==true && arquero==false && prisionero==false && petDogIsPresent==true){
       freePrisoner=true;
     }
      if (caballero==true && arquero==false && prisionero==true && petDogIsPresent==true){
       freePrisoner=true;
     }
       if (caballero==false && arquero==true && prisionero==false && petDogIsPresent==true){
       freePrisoner=false;
     }
     
    
    return freePrisoner;
    }
    let caballero2=true;
    let arquero3=false;
    let prisionero4=true;
    let perroPresente=false;
    console.log(canFreePrisoner(caballero2,arquero3,prisionero4,perroPresente));
