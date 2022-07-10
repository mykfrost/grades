const marks = [80 , 80 , 50] ;

//average = 70

//1- 59 F
//60-69 D
//70-79 C
//80-89 B
//90-100 A

console.log(calculateGrade(marks));

function calculateGrade(marks){
 let sum = 0;
//iterate through the array and add all values to sum
 for (let mark of marks)
 sum+= mark;// this is the total 

 //calculating the average

 let average = sum / marks.length;

// if (average >= 0 && average <= 59) return 'F';

// if (average >= 60 && average <= 69) return 'D';

// if (average >= 70 && average <= 79) return 'C';

// if (average >= 80 && average <= 89) return 'B';

// if (average >= 90 && average <= 100) return 'F';

if (average < 60) return 'F';
if (average < 70) return 'D';
if (average < 80) return 'C';
if (average <  90) return 'B';
if (average < 100) return 'F';

}