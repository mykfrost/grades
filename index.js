const array = [80 , 80 , 50] ;

//average = 70

//1- 59 F
//60-69 D
//70-79 C
//80-89 B
//90-100 A

console.log(calculateGrade(array));

function calculateGrade(marks){


// if (average >= 0 && average <= 59) return 'F';

// if (average >= 60 && average <= 69) return 'D';

// if (average >= 70 && average <= 79) return 'C';

// if (average >= 80 && average <= 89) return 'B';

// if (average >= 90 && average <= 100) return 'F';

//coment out this second solution
if (average < 60) return 'F';
if (average < 70) return 'D';
if (average < 80) return 'C';
if (average <  90) return 'B';
 return 'A';

}

//Simple fucntion for calculating averages
function calculateAverage (array){
    let sum = 0;
    //iterate through the array and add all values to sum
     for (let value of array)
     sum+= value;// this is the total 
    
   //calculating the average
  return  sum / array.length;

}