var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-matches');

describe('next/matches', function () {

  it('nx.mix', function () {
    var obj1 = {name: 'fei'};
    var obj2 = {email: '1290657123@qq.com'};

    var result = {};

    nx.mix(result, obj1, obj2);

    assert.equal(result.name, obj1.name);
    assert.equal(result.email, obj2.email);
  });

});
