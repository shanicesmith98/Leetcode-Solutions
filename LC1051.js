/**
 * Problem: Students are asked to stand in non-decreasing order of heights for an annual photo.
 * Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
 * Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.
 * 
 * 
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let studentsMoved = 0;
    let sortedHeights = heights.slice().sort((a,b) => a- b); // create copy of sorted heights arr
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) // if student in heights moved in sorted heights -> increase students moved
            studentsMoved++;
    }
    
    return studentsMoved;
};