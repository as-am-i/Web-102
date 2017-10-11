// JavaScript Lab 1
// Due Date: Friday, 13th
// Used codepen.io to validate my code 



// The things I learnd from this exercise

// string.charAt(index) => The index of the last character in a string is string.length-1. 
// Don't use the negative number for charAt().

// string.slice(start, end)
// takes 2 parameters: the starting index (position), and the ending index (position)
// The ending index is not included
// The end index is an optional If omitted, it extracts the rest of the string
// string(1) means you want to get from index 1 to the end
// Use the negative number for slice(),  to select from the end of the string

// string.substr(start, length)
// The length is not the index, but the number of characters to extract( and it's optional)
// stringsubstr(1, 4) means that you get from the index 0 until reach that you get 4 characters
// Use the negative number for substr(),  to select from the end of the string

// string.slice(1, 5) => 1, 2, 3, 4
// string.substr(1. 4) => 1, 2, 3, 4




// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
function makeAbba(a, b) {
	return a + b + b + a;
}

ar x = makeAbba("Hi", "Bye");
console.log(x);

// Given a string, return true if it ends in "ly".
function endsLy(str) {
	var lastTwo = str.slice(-2);
	lastTwo == "ly" ? "True" : "False";
}

var y = endsLy("oddy");
console.log(y);

// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
function firstHalf(evenSt) {
	if (evenSt.length % 2 == 0) {
		return evenSt.slice(0, evenSt.length / 2 ); 
		// the end is not included
	}
	else {
		return "";
	}
}

// Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
function right2(strRight) {
	if (strRight.length >= 2) {
		var result = strRight.slice(-2) + strRight.slice(0, -2);
		return result;
	}
	else {
		return "";
	}
}

var x = right2("Java");
console.log(x);


// Given two strings, append them together (known as "concatenation") and return the result. 
// However, if the concatenation creates a double-char, then omit one of the chars, 
// so "abc" and "cat" yields "abcat".
function conCat(c, d) {
	if (c.slice(-1) != d.charAt(0)) {
		return c + d;
	}
	else {
		return c + d.slice(1);
	}
}

// Anothe way to behave the same as the above
function conCat2(e, f) {
	if (e.charAt(e.length-1) != f.charAt(0)) {
		return e + f;
	}
	else {
		return e + f.slice(1);
	}
}

var x = conCat("Java", "acript");
console.log(x);


// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".
function frontAgain(strAgain) {
	if (strAgain.slice(0, 2) == strAgain.slice(-2)) {
		return true;
	}
	else {
		return false;
	}
}

var x = frontAgain("edied")
console.log(x)


// Given a string, return a version without the first 2 chars. 
// Except keep the first char if it is 'a' and keep the second char if it is 'b'. 
// The string may be any length. Harder than it looks.
function frontAgain(strAgain) {
  var fChar = strAgain.charAt(0);
  var sChar = strAgain.charAt(1);
	if (fChar == "a" && sChar == "b"){
		return strAgain;
	}
	else if (fChar == "a" && sChar != "b") {
    return strAgain.charAt(0) + strAgain.slice(2);
	}
  else if (fChar != "a" && sChar == "b") {
    return strAgain.slice(1);
  }
  else {
    return strAgain.slice(2);
  }
}

var x = frontAgain("cdeferrrr");
console.log(x);

// Given a string, if one or both of the first 2 chars is 'x', 
// return the string without those 'x' chars, and otherwise return the string unchanged. 
// This is a little harder than it looks.
function withoutX2(strX2) {
  fChar = strX2.charAt(0);
  sChar = strX2.charAt(1);
  if (fChar == "x" && sChar == "x") {
    return strX2.slice(2);
      }
  else if (fChar == "x" && sChar != "x") {
    return strX2.slice(1);
      }
  else if (fChar != "x" && sChar == "x") {
    return fChar + strX2.slice(2);
  }
  else {
    return strX2;
  }
}

var x = withoutX2("Hi");
console.log(x);

// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, 
// so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
function lastChars(a, b) {
  if (a.length == 0 && b.length != 0) {
    return "@" + b.charAt(b.length-1);
  }
  else if (a.length != 0 && b.length == 0) {
    return a.charAt(0) + "@";
  }
  else {
    return a.charAt(0) + b.charAt(b.length-1);
  }
}

var x = lastChars("yo", "java");
console.log(x);


// Given a string of even length, 
// return a string made of the middle two chars, so the string "string" yields "ri". 
// The string length will be at least 2.
function middleTwo(strMid) {
  if (strMid.length >= 2 && strMid.length % 2 == 0) {
    var mid = strMid.length / 2 - 1;
    return strMid.substr(mid, 2);
  }
  else {
    return "";
  }
}

var x = middleTwo("Practice");
console.log(x);
