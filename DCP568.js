/* Daily Coding Problem: Problem #568 [Easy]
*
* Given a sorted list of integers, square the elements
* and give the output in sorted order.
*
*/

const squared = arr => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
        newArr.push(arr[i]);
    } 

    for (let i = newArr.length - 1; i>=0; i--) {
        for (let j = 1; j<=i; j++) {
            if (newArr[j - 1] > newArr[j]) {
                let temp = newArr[j - 1];
                newArr[j - 1] = newArr[i];
                newArr[j] = temp;
            }
        }
    }

    return newArr;
};

console.log(squared([-9, -2, 0, 2, 3]));