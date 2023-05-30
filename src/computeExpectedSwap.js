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
        // x = reserveIn after swap
        // y = reserveOut after swap
        // k = invariant, must always remain constant and represents the price relationship of one token to another
        // tokens must be transferred to pairs before swap is called

        // Establish the curve
        const k = reserveIn * reserveOut

        // Add incoming tokens to incoming reserve
        const x = reserveIn + amountIn

        // Determine new reserve of outgoing tokens
        const y = k / x

        // Determine output of traded tokens
        const swapOut = reserveOut - y

        return swapOut;
    }

    computeExpectedSwapIn(amountOut, reserveIn, reserveOut, fee) {
        // TASK 2: Complete method for swapIn
        // x * y = k, denotes the price curve
        // x = reserveIn after swap
        // y = reserveOut after swap
        // k = invariant, must always remain constant and represents the price relationship of one token to another
        // tokens must be transferred to pairs before swap is called

     

        // Establish the curve
        const k = reserveIn * reserveOut

        // Subtract outgoing tokens from current reserve
        const y = reserveOut - amountOut

        // Determine total reserve of incoming tokens after the swap
        const x = k / y

        // Determine amount of tokens swapped in
        const swapOut = x - reserveIn

        return swapOut;
    }
}

module.exports = ComputeExpectedSwap;