let choosebeverage
do {
    choosebeverage = +prompt('Cosa vuoi bere? \n 1- acqua \n 2- coca-cola \n 3-birra');
    if(choosebeverage == 1){
        console.log("E' stata selezionata l'acqua");
    }else if(choosebeverage == 2){
        console.log("E' stata selezionata la coca-cola");
    }else if(choosebeverage == 3){
        console.log("E' stata selezionata la birra");
    }else{
        console.log("Scelta non valida");
    }   
} while (choosebeverage < 1 || choosebeverage > 3)
    
    

