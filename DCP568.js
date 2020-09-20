/* Daily Coding Problem: Problem #568 [Easy]
*
* Given a sorted list of integers, square the elements
* and give the output in sorted order.
*
*/

const squared = arr => {
    let newArr = [];

    arr.forEach(element => {
        newArr.push(element *= element);
    });

    return newArr.sort((a,b) => a - b);

};

console.log(squared([-9, -2, 0, 2, 3]));
console.log(squared([10, 1, 2, 17, 8]));