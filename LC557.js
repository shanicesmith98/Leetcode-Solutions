/**
 * Problem: Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');

    // split the string into arr seperated by spaces
    // for each word in arr split into their own arr
    // reverse letter arr and join the letters into str words again
    // join the reverse word arr into full str seperated by a space
};