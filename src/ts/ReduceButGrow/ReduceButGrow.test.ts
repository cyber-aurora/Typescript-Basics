import { describe, it, expect, assert } from 'vitest';
import { grow } from './ReduceButGrow';

describe("Tests Reduce but Grow", function() {
  it("Testing for [1, 2, 3]", () => assert.strictEqual(grow([1, 2, 3]), 6));
  it("Testing for [4, 1, 1, 1, 4]", () => assert.strictEqual(grow([4, 1, 1, 1, 4]), 16));
  it("Testing for [2, 2, 2, 2, 2, 2]", () => assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64));
});