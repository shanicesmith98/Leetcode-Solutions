/*
* Problem: Given an array of integers and an integer target, find a continuous sequence that add up to the target.
* If target is found, return true. If not, return false.
*/

const findTarget = (arr, target) => {
    let total = 0, start = 0;
    
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];

        if (total > target) {
            total -= arr[start];
            start++;
        }
        
        if (total == target) {
            return true;
        }
    }
    
    return false;
};
    
console.log(findTarget([1, 3, 1, 4], 8)); // true
console.log(findTarget([1, 3, 1, 4], 7)); // false
console.log(findTarget([6, 2, 5], 5)); // true
console.log(findTarget([], 3)); // false

// Runtime: O(n), Memory: O(1)