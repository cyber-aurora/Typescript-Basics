import { describe, it, expect, assert } from 'vitest';
import { Fibonacci } from "./Fibonacci";

describe.skip('Tests Even Fibonacci Sum', () => {
    
    it('should return 0', () => {
        assert.equal(Fibonacci(0), 0)
    });

    it('should return 10', () => {
        assert.equal(Fibonacci(33), 10)
    });

    it('should return 19544084', () => {
        assert.equal(Fibonacci(25997544), 19544084)
    });

});
