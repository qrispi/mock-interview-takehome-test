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

        it('should return 4 when swapping 2 in with reserves of 2:8', function () {
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
        it('should return 2 when swapping 4 out with reserves of 4:4', function () {
            let computeExpected = new ComputeExpected();
            let swapOut = 2.0;
            let reserveIn = 4.0;
            let reserveOut = 4.0;
            let fee = 0.0;
            let expectedIn = 4.0;

            assert.equal(computeExpected.computeExpectedSwapIn(swapOut, reserveIn, reserveOut, fee), expectedIn);
        });

        it('should return 4 when swapping 2 out with reserves of 2:8', function () {
            let computeExpected = new ComputeExpected();
            let swapOut = 4.0;
            let reserveIn = 2.0;
            let reserveOut = 8.0;
            let fee = 0.0;
            let expectedIn = 2.0;

            assert.equal(computeExpected.computeExpectedSwapIn(swapOut, reserveIn, reserveOut, fee), expectedIn);
        });
    });

    describe("Tests with a fee", function () {
        // TASK 3: Write test cases with a fee.
    });
});