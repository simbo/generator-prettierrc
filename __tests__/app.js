const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testApp = () => helpers.run(require.resolve('../generators/app'));

describe('generator-prettierrc:app', () => {
  it('creates `.prettierrc`', () =>
    testApp().then(() => {
      assert.file(['.prettierrc']);
    }));

  describe('with option `generateInto`', () => {
    it('creates `.prettierrc` in desired path', () =>
      testApp()
        .withOptions({
          generateInto: 'foo'
        })
        .then(() => {
          assert.file(['foo/.prettierrc']);
        }));
  });
});
