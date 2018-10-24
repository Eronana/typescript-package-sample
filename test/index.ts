import { helloWorld } from '../src';
import { assert } from 'chai';

describe('helloWorld', () => {
  it('should return correct result', () => {
    const result = helloWorld('node');
    assert.equal(result, `Hello node, hello world!`);
  });
});
