const ComputeExpected = require('../src/computeExpectedSwap');
var assert = require('assert');

/**
 * Test cases for ComputeExpected. 
 * 
 */
describe('ComputeExpected', function () {
    describe("Test computeExpectedSwapOut without a fee", function () {
        it('should return 2 when swapping 4 in with reserves of 4:4', function () {
            let computeExpected = new ComputeExpected();
            let swapIn = 4.0;
            let reserveIn = 4.0;
            let reserveOut = 4.0;
            let fee = 0.0;
            let expectedOut = 2.0;

            assert.equal(computeExpected.computeExpectedSwapOut(swapIn, reserveIn, reserveOut, fee), expectedOut);
        });

        it('should return 2 when swapping 4 in with reserves of 4:4', function () {
            let computeExpected = new ComputeExpected();
            let swapIn = 2.0;
            let reserveIn = 2.0;
            let reserveOut = 8.0;
            let fee = 0.0;
            let expectedOut = 4.0;

            assert.equal(computeExpected.computeExpectedSwapOut(swapIn, reserveIn, reserveOut, fee), expectedOut);
        });
    });

    describe("Test computeExpectedIn without a fee", function () {
        // TASK 2: Write test cases for computeExpectedSwapIn.
    });

    describe("Tests with a fee", function () {
        // TASK 3: Write test cases with a fee.
    });
});