import { setupTest } from 'ember-design-tutorial-fdl/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
