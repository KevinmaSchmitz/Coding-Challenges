// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(number => {
        return number * -1
    })
}

// Test Cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Invert array values", () => {
    it("Basic Tests", () => {
        assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
        assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
        assert.deepEqual(invert([]), []);
        assert.deepEqual(invert([0]), [-0]);
    });
});