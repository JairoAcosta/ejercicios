const EXPECTED_MINUTES_IN_OVEN  =40;

function remainingMinutesInOven(minutes){
    let time;
    time=EXPECTED_MINUTES_IN_OVEN-minutes;
    return time;
}

function preparationTimeInMinutes(numberOfLayers){
    let timePreparation=numberOfLayers*2;
    return timePreparation;
}

function totalTimeMinutes(numberOfLayers, actualMinutesInOven){
    let totalPrep;
    let totalTimeLayers=numberOfLayers*2;
    totalPrep=totalTimeLayers+actualMinutesInOven
    return totalPrep;
   
}

console.log(remainingMinutesInOven(30));
console.log(preparationTimeInMinutes(2));
console.log(totalTimeMinutes(3,20));
