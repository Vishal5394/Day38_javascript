let Head = 0;
let Tail = 1;

FlipCoin=Math.floor(Math.random()*10)%2
console.log(FlipCoin)
if(FlipCoin == 0){
    console.log("It's Head");
}
else{
    console.log("It's Tail")
}