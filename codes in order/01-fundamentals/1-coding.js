// Mark and John are trying to compare their BMI (Body Mass Index),
// which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// store Mark's and John's mass and height in variables 
const massMark = 78; //kg 
const heightMark = 1.68; // height

const massJohn = 92;
const heightJohn = 1.95;
// calculate both their BMIs using the formula
const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn)
// boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);
