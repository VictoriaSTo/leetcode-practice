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