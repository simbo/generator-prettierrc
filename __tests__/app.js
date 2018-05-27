const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('generator-prettierrc:app', () => {

  it('creates `.prettierrc`', () => {
    return test
      .run(require.resolve('../generators/app'))
      .then(() => {
        assert.file(['.prettierrc']);
      });
  });

  describe('with option `generateInto`', () => {

    it('creates `.prettierrc` in desired path', () => {
      return test
        .run(require.resolve('../generators/app'))
        .withOptions({
          generateInto: 'foo'
        })
        .then(() => {
          assert.file(['foo/.prettierrc']);
        });
    });

  });

});
