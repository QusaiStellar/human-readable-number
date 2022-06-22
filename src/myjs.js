const myf = (number) => {

   if (!number) {
      return 'zero';
   }

   let result = "";
   const numberArr = number.toString().split("");
   const UnitNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
   const TenthNumbers = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];

   if (numberArr.length === 3) {
      let tenth = +numberArr.slice(1).join("");
      let firstNumber = UnitNumbers[numberArr[0]];
      let secondNumber;
      let thirdNumber;

      if (tenth > 9 && tenth < 20) {
         secondNumber = tenth;
         return result = `${firstNumber} hundred ${secondNumber}`
      } else {
         let secondNumberIndex = Number(numberArr[2]);
         secondNumber = UnitNumbers[secondNumberIndex];
      }

      if ()

         result = `${firstNumber} hundred `
   }

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
         const secondNumber = Number(numberArr[numberArr.length - 2]);
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

myf(990)

// https://b1.cooksy.ru/articles/pravopisanie-chislitelnyh-v-angliyskom-yazyke-ot-1-do-100/
// числа от 13-19 формируются по принципу цифр от 3-9 с частицей «-teen»
// корень чисел 13 и 15 будет отличается от общего правила, их образование через корень thir и fif
// десятки образуются с присоединения к цифре суффикса –ty, но есть исключения в числах 20, 30, 40 и 50 и цифре 80 отсуствует повторение «t»