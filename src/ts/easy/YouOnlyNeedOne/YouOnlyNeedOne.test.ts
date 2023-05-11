import { describe, it, expect, assert } from 'vitest';
import { check } from './YouOnlyNeedOne';

describe.skip("Tests You only need one", function() {
  it("test", function() {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    assert.strictEqual(check([80, 137, 120, 10, 42, 90, 150], 200), false);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  });
});
