/**
 * mathutils - Basic Math Utility Functions
 * Author: AiutiDiGioco
 * License: Custom
 */

const mathutils = {
    /**
     * Calculates the factorial of a number.
     * @param {number} n - The number to calculate the factorial of.
     * @returns {number}
     */
    factorial(n) {
        if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
            console.error('[mathutils] Invalid input. Expected a non-negative integer.');
            return NaN;
        }
        if (n === 0 || n === 1) return 1;
        return n * mathutils.factorial(n - 1);
    },

    /**
     * Checks if a number is prime.
     * @param {number} n - The number to check.
     * @returns {boolean}
     */
    isPrime(n) {
        if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    },

    /**
     * Calculates the greatest common divisor (GCD) of two numbers.
     * @param {number} a - First number.
     * @param {number} b - Second number.
     * @returns {number}
     */
    gcd(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
            console.error('[mathutils] Invalid input. Expected integers.');
            return NaN;
        }
        return b === 0 ? Math.abs(a) : mathutils.gcd(b, a % b);
    }
};

// Example usage:
// console.log(mathutils.factorial(5)); // 120
// console.log(mathutils.isPrime(7)); // true
// console.log(mathutils.gcd(12, 18)); // 6

module.exports = mathutils;
