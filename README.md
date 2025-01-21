# Uncommon Stack Overflow Bug in Euclidean Algorithm

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two non-negative integers. The bug leads to a stack overflow error in a specific edge case.

## Bug Description

The `foo` function calculates the GCD using recursion. While it generally works correctly, it fails when both input numbers `a` and `b` are initially 0.  This causes infinite recursion, resulting in a stack overflow. This edge case is not immediately obvious.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` in a JavaScript environment (e.g., Node.js, browser console).
3. Run the function `foo(0, 0);`.
4. Observe the stack overflow error.

## Solution

The solution involves adding an explicit check at the beginning of the function to handle the case where both `a` and `b` are 0.

## Additional Notes

This example highlights the importance of considering edge cases and handling them gracefully to avoid unexpected behavior in recursive functions.