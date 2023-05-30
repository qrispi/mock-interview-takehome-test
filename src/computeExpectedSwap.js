/**
 * Helper Class to compute expected swap amounts given the current state of a Uniswap V2 Pair contract.
*/
class ComputeExpectedSwap {

    /** 
     * Compute the expected swap out amount given the swap in amount, reserves in and out, and a fee.
    */
    computeExpectedSwapOut(amountIn, reserveIn, reserveOut, fee) {
        // TASK 1: Complete method
        // x * y = k, denotes the price curve
        // x = reserveIn
        // y = reserveOut
        // k = invariant, must always remain constant and represents the price relationship of one token to another
        // tokens must be transferred to pairs before swap is called

        

        return 0;
    }
}

module.exports = ComputeExpectedSwap;