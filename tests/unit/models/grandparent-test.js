import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { make, setupFactoryGuy } from 'ember-data-factory-guy'

module('Unit | Model | grandparent', function(hooks) {
  setupTest(hooks);
  setupFactoryGuy(hooks);

  test('grandparent works', function(assert) {
    let grandparent = make('grandparent', {
      parent: make('parent'),
    });
    assert.equal(grandparent.parent.children.firstObject.name, 'Pat');
  });
});
