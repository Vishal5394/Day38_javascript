let headsCount=0;
let tailsCount=0;
let count = 0;

while (count<11) {
   var coin = Math.floor(Math.random()*10)
    if ( coin == 0)
         headsCount += 1
    else
        tailsCount += 1
    count += 1
}
console.log ("The number of heads was", headsCount)
console.log("The number of tails was", tailsCount)