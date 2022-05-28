const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold=0;

var { solution } = require("../kata/reversed-strings.js");

describe("Basic tests for reversed-strings", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
}); 