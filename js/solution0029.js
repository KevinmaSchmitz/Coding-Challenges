// Complete the function that accepts a string parameter, and reverses each word in the string.All spaces in the string should be retained.
function reverseWords(str) {
    return str.split('').reverse('').join('').split(' ').reverse('').join(' ')
}

// Test Cases
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
        assert.strictEqual(reverseWords('apple'), 'elppa');
        assert.strictEqual(reverseWords('a b c d'), 'a b c d');
        assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
    });
});
