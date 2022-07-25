
//funcion que cuenta el numero de aves que visitan el jardin por dia 

function totalBirdCount(birds) {
	
	let totalBirds=0;
	for (i=0;i<birds.length;i++){
		totalBirds=totalBirds+birds[i];
	}
	console.log(totalBirds);
}


let birdsPerDay =[2,5,0,7,4,1,3,0,2,5,0,1,3,1];

//totalBirdCount(birdsPerDay);

//funcion que contara el numero de aves que visito el jardin en una semana determinada.
function birdsInWeek(birdsPerDay,week){
	let valorFinal=(week*7);
	let valorInicial=valorFinal-7;
	let totalBirdsInweek=0;

	for (let i=valorInicial; i<valorFinal;i++){
		totalBirdsInweek+=birdsPerDay[i];
	}
	console.log(totalBirdsInweek);
	
	
}

//birdsInWeek(birdsPerDay,2);

//función para corregir error de conteo cada dos dias habia un pajaro oculto

function fixBirdCountLog(birdsPerDay){
	let aumentar=birdsPerDay[0]+=1;
	
	console.log(birdsPerDay);
	for (let i=1;i<birdsPerDay.length;i++){
		if (i%2==0){
			birdsPerDay[i]+=1;
		}
	}
	console.log(birdsPerDay);
}

fixBirdCountLog(birdsPerDay);