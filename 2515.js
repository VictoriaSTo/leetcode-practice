/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, target, startIndex) {
    let i = 1;

    if(words[startIndex] === target) {
        return 0;
    }

    while(i < words.length) {
        if(words[(startIndex + i) % words.length] === target || words[((startIndex - i) + words.length)%words.length] === target) {
            return i;
        };
        i++;
    }
    return -1;
};

// var closetTarget = function(words, target, startIndex) {
//     let left = startIndex;
//     let right = startIndex;
//     let step = 0;
//     let n = words.length;

//     while(step <= n) {
//         if(words[left] === target || words[right] === target) {
//             return step;
//         } else {
//             right = (right + 1) % n;
//             left = (left - 1 + n) % n;
//         }
//         step++;
//     }
//     return -1;
// };