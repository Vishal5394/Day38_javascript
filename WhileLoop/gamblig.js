let AMOUNT_OF_STAKE=100;
let BET_AMOUNT=1;
let WON=1;
let LOST=0;
let InHandcash = AMOUNT_OF_STAKE;

while(InHandcash> 50 && InHandcash < 200) {
    let play = Math.floor(Math.random() * 10) % 2;
    console.log("Gamblers play:"+play);

    switch(play) {
        case 1:
            InHandcash = InHandcash + BET_AMOUNT;
            console.log("Total current cash gambler has $"+InHandcash);
            break;
        case 0:
            InHandcash =InHandcash - BET_AMOUNT;
            console.log("Total current cash gambler has $"+InHandcash);
            break;
        default:
            console.log("default");
    }
    if(play == 1) {
        console.log("Player won the current play");
    }
    else {
        console.log("Player lost the current play");
    }

}
if(InHandcash==200 || InHandcash==50) {
    console.log("Player will resign for current day");
    
}