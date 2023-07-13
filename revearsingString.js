function reverseString(str) {
    //The split('') method is called on the input string str.
    // It splits the string into an array of individual characters.
    // By passing an empty string as the separator, each character of the string becomes an element of the resulting array.
    //The reverse() method is called on the array obtained from the previous step.
    // It reverses the order of elements in the array, effectively reversing the order of characters from the original string.
    //The join('') method is called on the reversed array,
    // which concatenates all the elements of the array into a single string.
    // Again, an empty string is passed as the separator, so there are no spaces or other characters inserted between the reversed characters.
    //The return statement is used to return the resulting reversed string.
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));
//'console.log(reverseString('hello')) is called, passing the string 'hello' as an argument to the reverseString function.
// The reversed string 'olleh' is then printed to the console.
