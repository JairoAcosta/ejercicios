//Ejercicio para hacer seguimiento a la puntuación mas alta en un juego utilizando objetos
//crear un nuevo tablero de puntuación más alta
function createScoreBoard(){

	const table={
		nombre:1000000, 
	}
	 console.log(`The Best Ever ${table.nombre}`);
}

//createScoreBoard();
//añadir jugadores a un tablero de puntuación
function addPlayer(scoreBoard,player,score){
		let prop=player;
		const obj=scoreBoard;

		obj[prop]=score;
		console.log(obj);
}

//addPlayer({'Dave Thomas':0},'José Valim',486373);
//eliminar jugadores de un tablero de puntuación
function removePlayer(scoreBoard,player){

	let prop=player;
	const obj=scoreBoard;

	delete obj[player];
	console.log(obj);

}

//removePlayer({'Dave Thomas':0},'Rose Fanaras');
//aumentar la puntuación de un jugador
function updateScore(scoreBoard,player,points){
	
	let update=scoreBoard[player]+=points;
	console.log(scoreBoard);

}
const scoreBoard={'Freyja Ciric':12771008,
'Jairo Acosta':102,
'Maritza Quintero':100,
'Jaimar Acosta':200}


//updateScore(scoreBoard,'Jairo Acosta',73);
//aplicar puntos de bonificación del lunes
function applyMondayBonus(scoreBoard){
	for (const key in scoreBoard) {
		scoreBoard[key]+=100;
		}
		console.log(scoreBoard);
	}
	//applyMondayBonus(scoreBoard);

	//normalizar una puntuación alta

	function normalizeScore(objetoParametro){
			console.log(objetoParametro.normalizeFunction());
	}
const pointsPlayer={
	score:45,
	normalizeFunction:function(score){
		
		return 3*this.score-10;
	},
}

normalizeScore(pointsPlayer);