//I will Build a vault that requires three mathematical calculations to generate the three codes in a combination.
//Firstly, I will create three different variable and each variable will store result of each calculation.
//I will use different arithmetic operators to generate correct combination/calculation (like 10 - 40 - 39)
//Lastly I will use alert to show popup which will display correct vault combination.

// created three variable and each variable stores number
const firstCombination = 5 + 5;
const secondCombination = 80 - 40;
const thirdCombination = 39 * 1;
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//used alert to display correct vault combination.
alert(
  `${message} ${firstCombination}-${secondCombination}-${thirdCombination}.`
);
