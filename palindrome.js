function isPalindrome(str) {
    //The split('') method is called on the input string str.
    // It splits the string into an array of individual characters.
    // By passing an empty string as the separator, each character of the string becomes an element of the resulting array.
    //The reverse() method is called on the array obtained from the previous step.
    // It reverses the order of elements in the array, effectively reversing the order of characters from the original string.
    //The join('') method is called on the reversed array, which concatenates all the elements of the array into a single string.
    // Again, an empty string is passed as the separator, so there are no spaces or other characters inserted between the reversed characters.
    //The reversed string is stored in a constant variable called reversed.
    const reversed = str.split('').reverse().join('');
    //str === reversed: The code then compares the original input string str with the reversed string using the strict equality operator (===).
    // If the original string is the same as the reversed string, it means the input string is a palindrome.
    //The return statement is used to return the result of the comparison, which will be either true if the string is a palindrome or false if it is not.
    return str === reversed;
}

console.log(isPalindrome('madam'));
//console.log(isPalindrome('madam')) is called, passing the string 'madam' as an argument to the isPalindrome function.
// The function determines that 'madam' is a palindrome since it reads the same forwards and backwards, and therefore, the output will be true.
//In summary, the code checks whether a given string is a palindrome by comparing it with its reversed version.
