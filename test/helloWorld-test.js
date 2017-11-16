import { describe, it } from 'mocha';
import { expect } from 'chai';

import HelloWorld from '../src/helloWorld';

describe('HelloWorld', () => {
  it('salute with name', () => {
    const hello = new HelloWorld('Dude');

    expect(hello.salute()).to.equal('Hi Dude');
  });
});
