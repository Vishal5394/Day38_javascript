let num = 5;
let feet;
let inch;
let foot;
let meter;
let unit = "feet";
switch(unit){

case "feet":
    num1 = num*12;
    console.log(num1+" inch")
    break;
case "inch":
    num2 = num/12;
    console.log(num2+" Feet")
    break;
case "foot":
    num3 = num/3.28084;
    console.log(num3+" Meter")
    break;
case "meter":
    num4 = num*3.28084;
    console.log(num4+" Feet")
    break;
        

}