module.exports = function toReadable(number) {
   let result = "";
   let numbers = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

   switch (number.toString().length) {
      case 1:
         result = numbers[number];
         console.log(result);

         break;
      case 2:
         result = `${numbers[number.toString()[0]]}ty ${numbers[number.toString()[1]]}`;
         console.log(result);

         break;

      default:
         break;
   }

   return result;
}

const myf = (number) => {
   let result = "";
   const numberArr = number.toString().split("");
   const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",];



   switch (numberArr.length) {
      case 3:
         result = `${numbers[numberArr[0]]} hundred `;
         console.log(result);
      case 2:
         let tenth;

         numberArr.length > 2 ?
            tenth = +numberArr.slice(1).join("") :
            tenth = number;

         let tenthArr = tenth.toString().split("");

         switch (tenth) {
            case 11:
            case 12:
            case 13:
               result = result + numbers[tenth];
               console.log(result);
               break;
            default:
               result = `${result} ${numbers[tenthArr[1]]}teen `;
               console.log(result);
               break;
         }
      default:
         result = result + numbers[tenth];
         break;
   }

   return result;
}

myf(242)