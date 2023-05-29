# Mock Interview Take Home Test

This repository introduces some critical building blocks Decentralized Finance (DeFi) by creating some simple tests and asking the reader to write code to pass the tests. 

## Uniswap V2

Uniswap was the first unicorn protocol on the Ethereum Blockchain.  Uniswap was a revolutionary idea that allowed anyone to create a market for any two tokens on the ethereum blockchain. Anyone can swap between two tokens in a contract holding two reserves of each token. The algorithm to calculate a swap uses the invariant $k$ for reserves $x$ and $y$ such that $$x \cdot y = k$$ 

The invariant $k$ must be the same after the swap as it was prior, even though both $x$ and $y$ will be different. For a 
more comprehensive overview of see [how uniswap V2 works ](https://docs.uniswap.org/contracts/V2/concepts/protocol-overview/how-uniswap-works).

## Tasks

- [ ] Implement `computeExpectedSwapOut` in [computeExpected.js](src/computeExpectedSwap.js). 
- [ ] Write new [tests](test/test.js) for a function that does not yet exist `computeExpectedSwapIn`.
- [ ] Add tests that include a fee of 0.3% being taken in the swap.
