// JavaScript Lab 2
// Due Date: Monday, 16th

// The things I learnd from this exercise

// 1. In JavaScript, we always need to add () when calling a method or function
// even if you don't use any parameters

// 2. In JavaScript, we can adds/removes items to/from an array, and returns the removed item(s).
// (No insert method in Ruby)
// Syntax:
// array.splice(index, howmany, item1, ....., itemX)
// e.g. 
// At position 2, remove 2 items, and add the new 1 item:
// arr.splice(2, 3, "new item")

// 3. Make sure that we use the complete conditional statement for Logical Operators such as || or &&
// so that JavaScript can understand the meanings

// 4. Avoide new Array() 
// The new keyword only complicates the code. It can also produce some unexpected results
// => if we put only one argument and it's a number, 
//    it will create an array containing new empty elements depending on the number.

// 5. Don't forget to put "return"
// Otherewise you will get "undefined" as a result



// 1. Given an array of ints length 3, 
// return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
function rotateLeft3(arr1) {
  var first = arr1.shift();
  arr1.push(first);
  
  return arr1;
}

console.log(rotateLeft3([1,2,3]))

// 2. Given an array of ints length 3, 
// return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.
function reverse3(arr2) {
  return arr2.reverse();
}

console.log(reverse3([1,2,3]));

// 3. Given an int array length 2, return true if it contains a 2 or a 3.
function has23(arr3) {
	var a = arr3.indexOf(2);
	var b = arr3.indexOf(3);
	if (a != -1 || b != -1) {
		return true;
	}
	else {
		return false;
	}
}

console.log(has23([4,5]));


// another way of has23
// return collection.includes(2) || collection.include(3);

// 4. Given an int array length 3, 
// if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. 
// Return the changed array.
function fix23(arr4) {
	var pos2 = arr4.indexOf(2);
	var pos3 = arr4.indexOf(3);
	if (pos2 != -1 && pos2 +1 == pos3) {
		arr4.splice(pos3, 1, 0);
		return arr4;
	}
	else {
		return arr4;
	}
}
console.log(fix23([1,2,1]));


// another way of fix23

// for (let index = 0; index < arr4.length-1; index++) {
// 	if(arr4[index] == 2 && arr4[index+1] == 3) {
// 		arr4[index+1] == 0;
// 	}
// }


// 5. Given an array of ints of odd length, 
// look at the first, last, and middle values in the array and return the largest. 
// The array length will be a least 1.
function maxTriple(arr5) {
	var first = arr5.shift(); // arr5[0]
	var last = arr5.pop(); //arr5[arr5.size -1]
	var middle = arr5[Math.floor(arr5.length / 2)];

	if (arr5.length >= 1) {
		var max = Math.max(first, last, middle);
		return max;
	}
	else {
		return "Enter an array of ints of ood length";
	}
}

// 6. Given an array of ints, swap the first and last elements in the array. 
// Return the modified array. The array length will be at least 1.
function swapEnds(arr6) {
	if (arr6.length >= 1) {

		var first = arr6.shift();
		var last = arr6.pop();

		arr6.unshift(last);
		arr6.push(first);
		return arr6;
	}
	else {
		return "Enter an array of ints of ood length";
	}
}

// 7. We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. 
// Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.
function unlucky1(arr7) {
	var pos1 = arr7.indexOf(1);
	var pos3 = arr7.indexOf(3);
	if (pos1 == 0 || pos1 == 1 || pos1 == arr7.length-1 || pos1 == arr7.length-2 && pos1+1 == pos3) {
		return true;
	}
	else {
		return false;
	}
}


// another way of arr7

// function unlucky1(collection) {    
//     var last = collection.length - 2;
  
//     if((collection[0] = 1 && collection[1] == 3) || 
//        (collection[1] = 1 && collection[2] == 3) || 
//        (collection[last] = 1 && collection[last + 1] == 3) ) {
      
//       return true;
//     }   
  
//     return false;
// }


// 8. Given 2 int arrays, a and b, of any length, 
// return a new array with the first element of each array. 
// If either array is length 0, ignore that array.
function front11(a, b) {
  if (a.length == 0){
    var arr8 = [b.shift()];
  }
  else if (b.length == 0) {
    var arr8 = [a.shift()];
  }
  else {
	  var arr8 = [a.shift(), b.shift()];
  }
  return arr8;
}

// 9. We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, 
// at least one of the pair is that value. Return true if the given value is everywhere in the array.
function isEverywhere(arr9, value) {
		var pairs = arr9.length / 2;
		var first = 0;
		var second = 1;

    if (arr9.length % 2 == 0) {
      // even
      for (i = 1; i <= pairs; i++) {
        if (value != arr9[first] && value!= arr9[second]) {
          return false;
          }
          first += 2;
          second += 2;
        }
      return true;
    }
  
  else {
    	// odd
		// arr9 = [1,5, 1,9, 3,1, 1]
		// value = 1
		// pairs = 4
    var last = arr9[arr9.length-1];
    
    for (i = 1; i < pairs; i++) {
    	if (value != arr9[first] && value != arr9[second]) {
    		return false;
    	}
    	first += 2;
    	second += 2;
    }

	    if (last != value) {
	    	return false
	    }
	    else {
	    	return true;
	    }
	}
}

// another way of isEverywhere(arr9, value)

// var size = arr9.length - 1
// for (let index = 0; index < size; index++) {
// 	if (arr9[index] != value && arr9[index+1] != value) {
// 		return false;
// 		}
// 	else {
// 		return true;
// 	}
// }


// 10. For each multiple of 10 in the given array, 
// change all the values following it to be that multiple of 10, 
// until encountering another multiple of 10. 
// So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.
function tenRun(arr10) {
	var multipleOfTen = -1;

    for (i = 0; i < arr10.length; i++) {
        if (arr10[i] % 10 == 0) {
            multipleOfTen = arr10[i];
            // for (j = i+1; arr10[j] % 10 != 0; j++) {
            //     arr10[j] = multipleOfTen;
            // }

            // this will cause an infinite loop
            // because j will not be exsited when i is the last index of array,
            // and j in that case will not be trigger to stop the loop
        }
        if(multipleOfTen != -1) {
        	arr10[i] = multipleOfTen;
        	// arr10[i] will be inclined after this conditional statement
        }
    }
    return arr10;
}

console.log(tenRun([1,2,10,5,9,20,6,8]));

// 11. Given an array of ints, return true if every 2 that appears in the array is next to another 2.
function twoTwo(arr11) {
    for (i = 1; i < arr11.length-1; i++) {
        if (arr11[i] == 2) {
            if (arr11[i-1] != 2 && arr11[i+1] != 2) {
              return false;
            }
        }
    }
    if (arr11[arr11.length-1] == 2) {

        if (arr11[arr11.length-2] == 2) {
          return true;
        }
        else {
          return false;
        }

        // another way
        // return arr11[arr11.length-2] == 2 ? true : false
    }
    return true;
}

// another way of twoTwo(arr11)

// function twoTwo(collection) {
// 	var count = 0;
    
// 	for(let index = 0; index < collection.length; index++) {
// 		if(collection[index] == 2){
// 			count++;
//         }
// 		else {
// 			if(count == 1){
// 				return false;
//             }
// 			else{
// 				count = 0;
//             }
// 		}
// 	}
    
// 	return (count != 1);
// }



// 12. Return an array that is "left shifted" by one
// so {6, 2, 5, 3} returns {2, 5, 3, 6}. 
// You may modify and return the given array, or return a new array.
function shiftLeft(arr12) {
	if (arr12.length == 1) {
		return arr12;
	}
	else {
		var first = arr12.shift();
		arr12.push(first);
		return arr12;
	}
}

// 13. Return an array that contains the exact same numbers as the given array, 
// but rearranged so that all the even numbers come before all the odd numbers. Other than that, 
// the numbers can be in any order. You may modify and return the given array, or make a new array.

// evenOdd([1, 0, 1, 0, 0, 1, 1])

function evenOdd(arr13) {
	var result =[];
	for (i = 0; i < arr13.length; i++) {
		if (arr13[i] % 2 == 0) {
			// even
			result.unshift(arr13[i]);
		}
		else {
			// odd
			result.push(arr13[i]);
		}
	}
	return result;
}

// It's too complicated for me to solve in the way below

// function evenOdd(arr13) {
// 	var lastIndex = arr13.length-1;
// 	var odd;
// 	for (i = 0; i < lastIndex; i++) {
// 		if (arr13[i] % 2 != 0) {
// 			// odd
// 			odd = arr13[i];
// 			arr13[i] = arr13[i+1];
// 			arr13[i+1] = odd;
// 			// arr12[i], arr[i+1] = arr12[i+1], arr12[i];
// 		}
// 	}
// 	if (arr13[lastIndex] % 2 == 0) {
// 		// even
// 		arr13.unshift(arr13[lastIndex]);
// 	}
// 	return arr13;
// }


// 14. This is slightly more difficult version of the famous FizzBuzz problem 
// which is sometimes given as a first problem for job interviews. (See also: FizzBuzz Code.) 
// Consider the series of numbers beginning at start and running up to but not including end, 
// so for example start=1 and end=5 gives the series 1, 2, 3, 4. 
// Return a new String[] array containing the string form of these numbers, 
// except for multiples of 3, use "Fizz" instead of the number, 
// for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". 
// In Java, String.valueOf(xxx) will make the String form of an int or other type. 
// This version is a little more complicated than the usual version 
// since you have to allocate and index into an array instead of just printing, 
// and we vary the start/end instead of just always doing 1..100.
function fizzBuzz(start, end) {
	var result = [];

	for (i = start; i < end; i++) {
		if (i % 3 == 0 && i % 5 != 0){
			result.push("Fizz");
		}
		else if (i % 3 != 0 && i % 5 == 0) {
			result.push("Buzz");
		}
		else if (i % 3 == 0 && i % 5 == 0) {
			result.push("FizzBuzz");
		}
		else {
			result.push("" + i);
		}
	}
	return result;
}

// 15. Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. 
// Return the number of clumps in the given array.
function countClumps(arr15) {
	var count = 0;
	var same = true;

	// test if all the elements of arr15 are the same
	for (i = 0; i < arr15.length-1 && same; i++) {
		if (arr15[i] != arr15[i+1]) {
			// some different elements are in arr15
			same = false;
			// go to the conditional statements below because this loop will be stopped due to the "&& same"
		}
	}

	if (arr15.length == 1) {
		count = 0;
	}
	else if (same) {
		// if all the elements of arr15 are the same
		count = 1;
	}
	else {
		for (j = 0; j < arr15.length-1; j++) {
			if (arr15[j] == arr15[j+1] && arr15[j+1] != arr15[j+2]) {
				count++;
			}
		}
	}
  	return count;
}

countClumps([1,2,2,2,4])


// another way of countClumps(arr15)

// function countClumps(collection) {    
//     var clumps = 0;
//     var isClump = false;
//     var size = collection.length - 1; 
    
//     for(let index = 0; index < size; index++){
//         if(isClump){
//             if(collection[index] != collection[index+1]){
//                 isClump = false;
//             }
//         }
//         else if(collection[index] == collection[index+1]){
//             isClump = true;
//             clumps++;
//         }
//     }
    
//     return clumps;    
// }

