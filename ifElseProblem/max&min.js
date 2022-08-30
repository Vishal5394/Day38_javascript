let a = 5;
let b = 2;
let c = 6;

let x=a+b*c;
let y=a%b+c;
let z=c+a/b;
let v=a*b+c;
console.log("x ="+x +"\ny="+y+"\nz= "+z+ "\nv="+v)

if (x>y && x>z && x>v){
    console.log("x is Maximum no")
}
else if (y>x && y>z && y>v){
    console.log("y is Maximum no")
}
else if (v>x && v>z && v>y){
    console.log("v is Maximum no")
}
else{
console.log("Error")
}

if (x<y && x<z && x<v){
    console.log("x is Minimum no")
}
else if (y<x && y<z && y<v){
    console.log("y is Minimum no")
}
else if (z<y && z<x && z<v){
    console.log("z is Minimum no")
}
else if (v<y && v<z && v<x){
    console.log("v is Minimum no")
}
else{
    console.log("Error")
}
