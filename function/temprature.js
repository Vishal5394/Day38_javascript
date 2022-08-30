const prompt = require("prompt-sync")();

function temperatureConverter() {
  console.log("1. Convert Celsius temperature into Fahrenheit  "+" \n2. Convert Fahrenheit temperatures into Celsius");
  const temp = prompt("choose 1 or 2 to value ")
  switch(temp){
       case 1:
         const celsius = prompt("Enter a celsius value: ");
         const fahrenheit = (celsius * (9/5)) + 32;
         console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
        break;

        case 2:
           fahrenheit = prompt("Enter a fahrenheit value: ");
           celsius = (fahrenheit-32)*(5/9);
           console.log(`${fahrenheit} degree fahrenheit is equal to ${celsius} degree celsius.`);
        break;
  }
}
 temperatureConverter()