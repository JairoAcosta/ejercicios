function dayRate(rate){
    let day=rate*8;
    return day;
}
console.log(dayRate(89));


function daysInBudget(budget,dayRate){
    let day =dayRate*8;
    let days=budget/day;
    return Math.floor(days);
    
}


console.log(daysInBudget(20000,89));



function priceWithMonthDiscount(dayRate,dayProyect,discount){
        let dayRates=dayRate*8; //presupuesto diario sin el descuento+
        let dayRest= dayProyect%22; //dias restantes de los meses
        let mount= Math.floor(dayProyect/30);// Meses que dura el proyecto
        let daysWorks=dayProyect-dayRest; //dias a trabajar en el proyecto
        let priceOutDiscount=daysWorks*dayRates;// precio del proyecto sin el descuento
        let priceDaysRest=dayRest*dayRates;// precio de los dias sobrantes

        let discounts=priceOutDiscount*discount;// descuento
        let price=priceOutDiscount-discounts;

        let priceTotal=Math.ceil(price+priceDaysRest); //precio total del proyecto
        return priceTotal;

        

}

console.log(priceWithMonthDiscount(89,230,0.42));