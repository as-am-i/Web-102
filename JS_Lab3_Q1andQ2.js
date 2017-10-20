// JavaScript Lab 3
// Due Date: Friday, 20th

// Q1.a
var arr = ['dog', 'cat', 'deer'];
var result = arr[0]+arr[2]

the value of result is 'dogdeer'

// Q1.b
var girls = ["Cecille", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var children = girls.concat(boys);

// Q1.c
var arr = [ 20, 30 ];
for (var i = arr.length; i < 5; i += 1) {
	arr[i] = Math.pow(1,2)
}
// Will the above for loop execute without error?
yes
// if it does execute, what will be contained in the array arr after the loop terminates?
[20, 30, 1, 1, 1]

// Q1.d
var arr = [ 10, 20, 30, 40, 50, 60, 70, 90 ];
var sum = 0;

for (var i = 1; i < 7; i += 1) {
	sum = sum + arr[i];
}

// What is the value sum when the loop terminates?
270

// The sum after the loop terminates should be 370.
// Fix the necessary statements to ensure sum is 370.
var i = 0. i < 8; i += 1

// Q1.e
var DL = 5;
var d = [25.0, 9.0, 10.0, 25.0, 15.0];
var mi = 0;
var m = d[mi];
for (var i = 1; i < DL; i++) {
	if (d[i] < m) {
		mi = i;
		m = d[mi];
		console.log(m);
	}
}
console.log("mi = ", mi, "m=", m);

// what is the output to the console after the completion of this code?
"mi =" 1 "m=" 9

// Q2
var arr = [
	[1,2,3,4,5],
	[2,3,4,5,6],
	[3,4,5,6,7],
	[4,5,6,7,8],
	[5,6,7,8,9]
]

// size == arr.length

function sumArray(arr, size) {
	var sum = 0;
	for (i = 0; i < size; i++) {
		for (j = 0; j < arr[i].length; j++) {
			// Row
			sum += arr[i][j];
		}
	}
	return sum;
}

console.log(sumArray(arr, 5))

// Q3








