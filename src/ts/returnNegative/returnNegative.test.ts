import { describe, it, expect } from 'vitest';
import { makeNegative } from './returnNegative'

describe('Test exercise return negative number', () => {
    it('should return -42', () => {
        const result = makeNegative(42)
        expect(result).equals(-42)
    });

    it('should return -3', () => {
        const result = makeNegative(3)
        expect(result).equals(-3)
    });

    it('should return -5', () => {
        const result = makeNegative(-5)
        expect(result).equals(-3)
    });

    it('should return 0', () => {
        const result = makeNegative(0)
        expect(result).equals(0)
    });
});

