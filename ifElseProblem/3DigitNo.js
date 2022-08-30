let num1= Math.floor(Math.random()*899)+100; 
let num2= Math.floor(Math.random()*899)+100;
let num3= Math.floor(Math.random()*899)+100;
let num4= Math.floor(Math.random()*899)+100;
let num5= Math.floor(Math.random()*899)+100;



if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    max_no = num1
}
else if (num2>num1 && num2>num3 && num2>num4 && num2>num5) {
    max_no = num2
}
else if (num3>num1 && num3>num2 && num3>num4 && num3>num5) {
        max_no = num3
 }
else if (num4>num1 && num4>num2 && num4>num3 && num4>num5) {
    max_no = num4
}
else if (num5>num1 && num5>num2 && num5>num4 && num5>num4) {
    max_no = num5 
}
else {
    console.log("Something Wrong....")
}

if(num1<num2 && num1<num3 && num1<num4 && num1<num5){
    min_no = num1
}
else if (num2<num1 && num2<num3 && num2<num4 && num2<num5) {
    min_no = num2
}
else if (num3<num1 && num3<num2 && num3<num4 && num3<num5) {
        min_no = num3
 }
else if (num4<num1 && num4<num2 && num4<num3 && num4<num5) {
    min_no = num4
}
else if (num5<num1 && num5<num2 && num5<num4 && num5<num4) {
    min_no = num5 
}
else {
        console.log("Something Wrong....")
    }

    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num4)
    console.log(num5)

    console.log("maximum no is: "+ max_no)
    console.log("minimum no is: "+ min_no)


