module.exports = function toReadable(number) {
   let result = "";
   const numberArr = number.toString().split("");
   const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",];

   switch (numberArr.length) {
      case 3:
         result = `${numbers[numberArr[0]]} hundred `;
      case 2:
         let tenth;

         numberArr.length === 3 ?
            tenth = +numberArr.slice(1).join("") :
            tenth = number;

         let tenthArr = tenth.toString().split("");

         if (tenth < 20 && 9 < tenth) {
            switch (tenth) {
               case 11:
               case 12:
                  result = result + numbers[tenth];
                  break;
               case 13:
                  result = `${result}thirteen`;
                  break;
               case 15:
                  result = `${result}fifteen`;
                  break;
               case 18:
                  result = `${result}eighteen`;
                  break;
               default:
                  result = `${result}${numbers[tenthArr[1]]}teen`;
                  break;
            }
         } else if (tenth >= 20) {
            switch (+tenthArr[0]) {
               case 2:
                  result = `${result}twenty`;
                  break;
               case 3:
                  result = `${result}thirty`;
                  break;
               case 4:
                  result = `${result}forty`;
                  break;
               case 5:
                  result = `${result}fifty`;
                  break;
               case 8:
                  result = `${result}eighty`;
                  break;
               default:
                  result = `${result}${numbers[tenthArr[0]]}ty`;
                  break;
            }
         }

      default:
         let lastNumberIndex;
         numberArr.length === 3 ?
            lastNumberIndex = numberArr[2] : numberArr.length === 2 ?
               lastNumberIndex = numberArr[1] : lastNumberIndex = number

         Number(numberArr[numberArr.length - 2]) === 1 ?
            result : Number(numberArr[numberArr.length - 2]) === 0 ?
               result = `${result}${numbers[lastNumberIndex]}` : result = `${result} ${numbers[lastNumberIndex]}`

         console.log(result);

         break;
   }
   return result;
}