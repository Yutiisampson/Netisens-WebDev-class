// Conditionals are used to perform different actions based on different conditions. 
// The main conditional statements in JavaScript are:


// if Statement:

// if (condition) {
//   code to execute if condition is true
// }

// let password = '12345678';

// if(password == '12345678qwerty'){
//     console.log('Access granted');
// }else{
//     console.log('Access denied');
// }

// console.log(typeof 'Musa');
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof '55');

// let score;
// // displayijng the score in the console
// console.log({score});

// console.log('length check:' + score.length);


//  let score  = prompt("Please enter your score:");
// console.log({score})
// //checking for invalid scores
// if(score < 0 || score > 100 || isNaN(score) || score.length < 1){
//     console.log('invalid score');    
//     // checking if the score is greater than or eauals to seventy
// }else if(score >= 70){
//     console.log('YOu have an A');    
// }else if(score >= 60){
//     console.log('YOu have a B');    
// }else if(score >= 50){
//     console.log('YOu have a C');
// }else if(score >= 45){
//     console.log('YOu have D');    
// }else{
//     console.log('YOu have an F, come back next year Dummy!!');
// }

//
// let score  = prompt("Please enter your score:");
// console.log({score});
// if (score >= 0 && score <= 100 isNaN(score) || score.length < 1) {
//     if(score >= 70){
//         console.log('Congratulations, you have an A!');
//     }else if(score >=60){
//         console.log('Congratulations, you have a B!');
//     }else if(score >=50){
//         console.log('Congratulations, you have a C!');
//     }else if(score >=40){
//         console.log('Congratulations, you have a D!');
//     }else{
//         console.log('You failed');
//     }
// } else { 
//     console.log('Invalid score')
// }



// let score  = prompt("Please enter your score:");
// console.log({score});
// if (score >= 0 && score <= 100 && isNaN(score) && score.length && score.trim() !=='') {
//     if(score >= 70){
//         console.log('Congratulations, you have an A!');
//     }else if(score >=60){
//         console.log('Congratulations, you have a B!');
//     }else if(score >=50){
//         console.log('Congratulations, you have a C!');
//     }else if(score >=40){
//         console.log('Congratulations, you have a D!');
//     }else{
//         console.log('You failed');
//     }
// } else { 
//     console.log('Invalid score')
// }


// let bankBalance = 70000;

// if(bankBalance > 80000){
//     console.log('rich Investor');
// }else if(bankBalance > 65000){
//     console.log('Agba baller');
// }else if(bankBalance > 50000){
//     console.log('Odogwu');
// }else if(bankBalance > 20000){
//     console.log('you are a Public servant');
// }else if(bankBalance > 10000){
//     console.log('you are broke');
// }else{
//     console.log('you are a broke bum');
// }



// if...else Statement:
// if (condition) {
//     code to execute if condition is true
//   } else {
//     code to execute if condition is false
//   }


// else if Statement:
// if (condition1) {
//     code to execute if condition1 is true
//   } else if (condition2) {
//     code to execute if condition2 is true
//   } else {
//     code to execute if neither condition1 nor condition2 is true
//   }
  



// Get the user input and store it in the variable
let score = prompt("Please enter your score: ");
console.log('Score before trimming: ' + score);
console.log('length before trimming: ' + score.length);

// Remove any leading or trailing whitespaces from the score
score = score.trim();
console.log('Score after trimming: ' + score);
console.log('length after trimming: ' + score.length);


// check if score is greater than 0
if(score.length > 0 && !isNaN(score) ){
    // Convert Score into a number
    score = Number(score);
    console.log('Score after converting to number: ' + score);
    if(score >=0 && score <= 100){
        if(score >= 70){
            console.log(`Congratulations, you scored ${score}, you have an A`);
        }else if(score >=60){
            console.log(`Congratulations, you scored ${score}, you have an B`);
        }else if(score >=50){
            console.log(`Congratulations, you scored ${score}, you have an C`);
        }else if(score >=45){
            console.log(`Congratulations, you scored ${score}, you have an D`);
        }else{
            console.log(`Poor, you scored ${score}, you have an F`);
        }
    }else{
        console.log('invalid score, out of range')
    }
   
}else{
    console.log('Invalid score');
}



// switch Statement:
// switch (expression) {
//     case value1:
//       code to execute if expression === value1
//       break;
//     case value2:
//       code to execute if expression === value2
//       break;
//     add more cases as needed
//     default:
//       code to execute if expression doesn't match any case
// //   }
// let num = 2 + 5;
// switch (num){
//     case 7:
//         console.log('seven');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     default:
//         console.log('invalid number');
// }



// let word1 = 'happy';
// let word2 = 'birthday';
// let word3 = 'Tim';

// //string concatenation method 
// console.log(word1 + ' ' + word2 + ' ' + word3)
// console.log('merry' +" "+ 'christmas')



// let word4 = 'good';
// let word5 = 'day';
// let word6 = 'mr';
// //string interpolation method
// console.log(`${word4} ${word5} to you, ${word6} tim`);