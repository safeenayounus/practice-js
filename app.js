// solution1

// let input1 = parseInt(prompt("Enter first number:"));
// let input2 = parseInt(prompt("Enter second number:"));
// if (input1 > input2) {
//     console.log(input1 + " is greater than " + input2);
// }
// else {
//     console.log(input1 + " is greater than " + input2);
// }
// soltion2

// let userNo = "Enter the number"
// if (userNo >= 0) {
//     alert("sign is +")
// }
// else {
//     alert("sign is -")
// }

// solution 3


// function getLargest(a, b, c, d, e) {
//   if (a > b && a > c && a > d && a > e) {
//     return a;
//   }
//   if (b > a && b > c && b > d && b > e) {
//     return b;
//   }
//   if (c > a && c > b && c > d && a > e) {
//     return c;
//   }
//   if (d > a && d > b && d > c && d > e) {
//     return d;
//   }
//   if (e > a && e > b && e > c && e > d) {
//     return e;
//   }
// }

// console.log(getLargest(1, 2, 3, 4, 5));
// console.log(getLargest(6, 7, 8, 9, 10));
// console.log(getLargest(10, 20, 30, 40, 50));
// console.log(getLargest(60, 70, 80, 90,2 ));
// console.log(getLargest(5, 1, 2, 3, 4));

// solution 4


// let number = prompt("Enter a number: ");
// if (number % 2 == 0) {
//   console.log("The number is even.");
// }

// if the number is odd
// else {
//   console.log("The number is odd.");
// }
// solution 5

// let students = [['a', 60], ['b', 70], ['c', 80], ['d', 90], ['e', 100]];

// 	let Avgmarks = 0;

// 	for (let i=0; i < students.length; i++) {
// 			Avgmarks += students[i][1];
// 			var avg = (Avgmarks/students.length);
// 	}

// 	alert("Average grade: " + (Avgmarks)/students.length);

// 			if (avg < 60){
// 			  console.log("Grade : F");      
// 			  } 
// 			else if (avg < 70) {
// 					console.log("Grade : D"); 
// 					  } 
// 			else if (avg < 80) 
// 				 {
// 					console.log("Grade : C"); 
// 			} else if (avg < 90) {
// 					console.log("Grade : B"); 
// 			} else if (avg < 100) {
// 					console.log("Grade : A"); 
// 	}



// solution6

// function logFizzBuzz(count){

//     for (let i = 1; i <= count; i++) {
//       let out = '';
//       if (i % 3 === 0){
//         out += 'Fizz';
//       }
//       if (i % 5 === 0){
//         out += 'Buzz';
//       }
//       console.log(out || i);
//     }
//   }; 
  
  
//   logFizzBuzz(45);
// solution 7
// for (let i = 1; i <=5; i++){
//         for (let j = 1; j <= i; j++){
//             document.write("* ")
//         }
//         document.write("<br>")
//     }