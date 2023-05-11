import { describe, it, expect, assert } from 'vitest';
import { longestRepetition } from "./LongestConsecutiveRepetition";

describe.skip('Tests Character with longest consecutive repetition', () => {
  it('should work with example tests', () => {
    assert.deepStrictEqual(longestRepetition('aaaabb'), ['a', 4])
    assert.deepStrictEqual(longestRepetition('bbbaaabaaaa'), ['a', 4])
    assert.deepStrictEqual(longestRepetition('cbdeuuu900'), ['u', 3])
    assert.deepStrictEqual(longestRepetition('abbbbb'), ['b', 5])
    assert.deepStrictEqual(longestRepetition('aabb'), ['a', 2])
    assert.deepStrictEqual(longestRepetition('ba'), ['b', 1])
    assert.deepStrictEqual(longestRepetition(''), ['', 0])
  })
})