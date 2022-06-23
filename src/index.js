module.exports = function toReadable(number) {

   let result = "";
   const numberArr = number.toString().split("");
   const tenth = Number(numberArr.slice(1).join(""));

   const UnitNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
   const numbersToTwenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];
   const TenthNumbers = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];

   const firstNumberIndex = Number(numberArr[0]);
   const secondNumberIndex = Number(numberArr[1]);
   const thirdNumberIndex = Number(numberArr[2]);

   let firstNumber = UnitNumbers[firstNumberIndex];
   let secondNumber = UnitNumbers[secondNumberIndex];
   let thirdNumber = UnitNumbers[thirdNumberIndex];

   if (numberArr.length === 3) {

      if (tenth >= 10 && tenth < 20) {
         secondNumber = numbersToTwenty[thirdNumberIndex];
         result = `${firstNumber} hundred ${secondNumber}`
      } else if (tenth >= 20) {
         secondNumber = TenthNumbers[secondNumberIndex];
         Number(thirdNumberIndex) !== 0 ? thirdNumber = UnitNumbers[thirdNumberIndex] : thirdNumber = '';
         result = `${firstNumber} hundred ${secondNumber} ${thirdNumber}`;
      } else {
         thirdNumberIndex ? thirdNumber = UnitNumbers[thirdNumberIndex] : thirdNumber = '';
         result = `${firstNumber} hundred ${thirdNumber}`;
      }

   } else if (numberArr.length === 2) {

      if (number >= 10 && number < 20) {
         firstNumber = numbersToTwenty[secondNumberIndex];
         result = `${firstNumber}`;
      } else if (number >= 20) {
         firstNumber = TenthNumbers[firstNumberIndex];
         secondNumber = UnitNumbers[secondNumberIndex];
         Number(secondNumberIndex) !== 0 ? secondNumber = UnitNumbers[secondNumberIndex] : secondNumber = '';
         result = `${firstNumber} ${secondNumber}`;
      } else {
         thirdNumber = tenth;
         result = `${firstNumber} ${thirdNumber}`;
      }

   } else {

      firstNumber = UnitNumbers[firstNumberIndex];
      result = `${firstNumber}`;

   }

   return result.trim();
}