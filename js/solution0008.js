// // Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.



function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 === 1) {
        return 'I love you'
    } else if (nbPetals % 6 === 2) {
        return 'a little'
    } else if (nbPetals % 6 === 3) {
        return 'a lot'
    } else if (nbPetals % 6 === 4) {
        return 'passionately'
    } else if (nbPetals % 6 === 5) {
        return 'madly'
    } else {
        return 'not at all'
    }
}

// test cases

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("howMuchILoveYou", function () {
    it("Basic tests", function () {
        assert.strictEqual(howMuchILoveYou(7), "I love you")
        assert.strictEqual(howMuchILoveYou(3), "a lot")
        assert.strictEqual(howMuchILoveYou(6), "not at all")
        assert.strictEqual(howMuchILoveYou(2), "a little")
        assert.strictEqual(howMuchILoveYou(5), "madly")
    });
})

describe("Random tests", function () {

    function randint(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }

    function howMuchILoveYouUN(nbPetals) {
        return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) % 6] //g
    }

    it("Testing for 100 random tests", () => {
        for (let i = 0; i < 100; i++) {
            let r = randint(100, 500)
            let exp = howMuchILoveYouUN(r);
            assert.strictEqual(howMuchILoveYou(r), exp, `Testing for nbPetals = ${r}`);
        }
    });
})