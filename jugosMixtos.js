// funciones para agilizar el servicio en la tienda de jugos 


//función para determinar el tiempo de preparación de un jugo en particular
function timeToMixJuice(juice){

let jugos=juice;
switch (jugos){
	case 'Pure Strawberry Joy':console.log(0.5);
	break;

	case 'Energizer':
	case 'Green Garden':console.log(1.5);
	break;

	case 'Tropical Island': console.log(3);
	break;

	case 'All or Nothing': console.log (5);
	break;

	case 'Ofertas especiales': console.log(2.5);
	break;

	default: console.log('Opción no valida');
}


}

//timeToMixJuice('Green Garden');

let wedges=['small','small','large','medium','small'];
let lima=0;
let cant=0;
let num;
function limesToCut(wedgesNeeded,limes){

}

limesToCut(25,wedges);