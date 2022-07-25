function calcularPrecioDelVehiculo(precioOriginal,edadAuto){
	let edadauto=edadAuto;
	let valorDescontado;
	let precioTotal;

	if (edadauto<3){
		valorDescontado=precioOriginal*0.20;
		precioTotal=precioOriginal-valorDescontado;
		console.log('Su auto tiene un valor de:'+ precioTotal);
	} else{
		if (edadauto>10){
			valorDescontado=precioOriginal*0.50;
			precioTotal=precioOriginal-valorDescontado;
			console.log('Su auto tiene un valor de:'+precioTotal);
		}else{
			if (edadauto>=3 && edadauto<=10){
			valorDescontado=precioOriginal*0.30;
			precioTotal=precioOriginal-valorDescontado;
			console.log('Su auto tiene un valor de:'+precioTotal);
			}
		}
	}
}

calcularPrecioDelVehiculo(30000,15);