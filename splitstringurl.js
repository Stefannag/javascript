// you can easily split a string
// just give the character and his position

var initialString = "www.domain.com/folder/subfolder";

// spliting the string before the first '/', will return you 'www.domain.com'
console.log(initialString.split('/')[0]); 

// spliting the string before the second '/', will return you 'folder'
console.log(initialString.split('/')[1]);

// spliting the string before the second '/', will return you 'subfolder'
console.log(initialString.split('/')[2]);

