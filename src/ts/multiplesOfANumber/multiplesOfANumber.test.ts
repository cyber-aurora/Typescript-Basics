import { describe, it, expect } from 'vitest';
import { findMultiples } from './multiplesOfANumber'

describe('Test exercise Multiples of a number', () => {
    it('should return 2, 4 and 6', () => {
        const result = findMultiples(2,6)
        expect(result).toStrictEqual([2, 4, 6])
    });

    it('should return 5,10,15,20 and 25', () => {
        const result = findMultiples(5,25)
        expect(result).toStrictEqual([5, 10, 15, 20, 25])
    });

    it('should return 1 and 2', () => {
        const result = findMultiples(1,2)
        expect(result).toStrictEqual([1, 2])
    });

    it('should return 5', () => {
        const result = findMultiples(5,7)
        expect(result).toStrictEqual([5])
    });

    it('should return 4, 8, 12, 16, 20 and 24', () => {
        const result = findMultiples(4,27)
        expect(result).toStrictEqual([4, 8, 12, 16, 20, 24])
    });

    it('should return 11, 22, 33 and 44', () => {
        const result = findMultiples(11,54)
        expect(result).toStrictEqual([11, 22, 33, 44])
    });
});

