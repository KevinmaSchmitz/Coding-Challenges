// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
    } else {
        return number * 9
    }
}

// Test Cases 

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(simpleMultiplication(2), 16, 'Should return double given argument..')
        assert.strictEqual(simpleMultiplication(1), 9, 'Should return double given argument..')
        assert.strictEqual(simpleMultiplication(8), 64, 'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(4), 32, 'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(5), 45, 'Should return given argument times nine...')
    });
});