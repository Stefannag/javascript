// this is the simpliest way to
// reverse a string in Javascript

function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("Hello")); //checking your console, will display "olleH"
