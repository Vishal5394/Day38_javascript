
const n=5;
let sum = 0;
let avg = 0;

for (let i=1; i<=n; i++){
    let random_no = Math.floor(Math.random()*89)+10;
   console.log (i + " Random No: " + random_no)
   sum+=random_no;
   avg=sum /n;
}
console.log("sum: "+sum)
console.log("Average: "+avg)
