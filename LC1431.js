/**
 * Problem: Given the array candies and the integer extraCandies,
   where candies[i] represents the number of candies that the ith kid has.

   For each kid check if there is a way to distribute extraCandies among the kids
   such that he or she can have the greatest number of candies among them.
   Notice that multiple kids can have the greatest number of candies.
    
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let maxCandies = candies[0]; // 1st element is max
    for (let i = 1; i < candies.length; i++) {
        if (candies[i] > maxCandies) // if ith element is bigger then assign to max
            maxCandies = candies[i];
    }
    
    for (let i = 0; i < candies.length; i++) {
        ans.push(candies[i] + extraCandies >= maxCandies);
    }
    return ans;
}; // Runtime: O(n), n dependent on length of candies arr
