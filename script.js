var specialCharArray = [ '!','@','#','$','%','^','&','*','(',')'];
var randomSpecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
console.log('Random special character: ' + randomSpecialChar)

var numberArray = [	'1','2','3','4','5','6','7','8','9','0'];
var randomNumber = Math.floor(Math.random() * numberArray.length);
console.log('Random number: ' + randomNumber)

var lowerCharArray = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomLowerChar = lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)];
console.log('Random lowercase: ' + randomLowerChar)

var upperCharArray = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomUpperChar = upperCharArray[Math.floor(Math.random() * upperCharArray.length)];
console.log('Random uppercase: ' + randomUpperChar)



var length = prompt('How many characters do you want your password to be?');
console.log(length)
var specialChar = confirm('Do you want special characters in your password?');
console.log(specialChar)
var numberChar = confirm('Do you want numbers in your password?');
console.log(numberChar)
var lowerChar = confirm('Do you want lowercase letters in your password?');
console.log(lowerChar)
var upperChar = confirm('Do you want uppercase letters in your password?')
console.log(upperChar)


var password = [''];
	if (upperChar === true) {
		password.push(randomUpperChar);
	}
	if (lowerChar === true) {
		password.push(randomLowerChar);
	}
	if (numberChar === true) {
		password.push(randomNumber);
	}
	if (specialChar === true) {
		password.push(randomSpecialChar);
	}
console.log('Password is ' + password.join(""))



alert('Password is: ' + password.join(""));



// var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
// //will I need more than one random special character? it's possible 
// var randomspecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
// console.log('Random special character: ' + randomspecialChar)
// var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// //I may need more than one number 
// var randomNumber = Math.floor(Math.random() * numberArray.length);
// console.log('Random number: ' + randomNumber)
// //i may need more than one lowerchar
// var lowerCharArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var randomLowerChar = lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)];
// console.log('Random lowercase: ' + randomLowerChar)
// //i may need more than one upperchar 
// var upperCharArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var randomUpperChar = upperCharArray[Math.floor(Math.random() * upperCharArray.length)];
// console.log('Random uppercase: ' + randomUpperChar)

// var password = ""
// if (upperChar === true) {
// 	//here I would push upperCase characters to the password string based on how long the password needs to be 
// 	password.push(upperChar)
// }





// var length = prompt('How many characters do you want your password to be?');
// console.log(length)
// if (length < 8 {
// 	alert('Length must be more than 8');
// 	length = prompt('How many characters do you want your password to be?');
// }
// var specialChar = confirm('Do you want special characters in your password?');
// console.log(specialChar)
// var numberChar = confirm('Do you want numbers in your password?');
// console.log(numberChar)
// var lowerChar = confirm('Do you want lowercase letters in your password?');
// console.log(lowerChar)
// var upperChar = confirm('Do you want uppercase letters in your password?')
// console.log(upperChar)
// //now how do I tell the computer to generate a password full of what the user asked for? what kind of statement would I need?






// var specialCharArray = [ '!','@','#','$','%','^','&','*','(',')'];
// var randomspecialChar = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
// console.log('Random special character: ' + randomspecialChar)

// var numberArray = [	'1','2','3','4','5','6','7','8','9','0'];
// var randomNumber = Math.floor(Math.random() * numberArray.length);
// console.log('Random number: ' + randomNumber)

// var lowerCharArray = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var randomLowerChar = lowerCharArray[Math.floor(Math.random() * lowerCharArray.length)];
// console.log('Random lowercase: ' + randomLowerChar)

// var upperCharArray = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var randomUpperChar = upperCharArray[Math.floor(Math.random() * upperCharArray.length)];
// console.log('Random uppercase: ' + randomUpperChar)




// var length = prompt('How many characters do you want your password to be?');
// console.log(length)

// if (length < 8) {
// 	alert('Length must be more than 8');
// 	length = prompt('How many characters do you want your password to be?');
// }
// var specialChar = confirm('Do you want special characters in your password?');
// console.log(specialChar)
// var numberChar = confirm('Do you want numbers in your password?');
// console.log(numberChar)
// var lowerChar = confirm('Do you want lowercase letters in your password?');
// console.log(lowerChar)
// var upperChar = confirm('Do you want uppercase letters in your password?')
// console.log(upperChar)







