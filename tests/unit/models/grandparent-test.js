import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { make, setupFactoryGuy } from 'ember-data-factory-guy'

module('Unit | Model | grandparent', function(hooks) {
  setupTest(hooks);
  setupFactoryGuy(hooks);

  test('grandparent works with factory guy', function(assert) {
    let grandparent = make('grandparent', {
      parent: make('parent'),
    });
    assert.equal(grandparent.parent.children.firstObject.name, 'Pat', 'Name is Pat');
  });

  test('grandparent works without factory guy', function(assert) {
    let store = this.owner.lookup('service:store');
    let parentClone = store.createFragment('parent', {
      children: [{
        name: 'Pat'
      }]
    });
    let grandparent = store.createRecord('grandparent', {
      parent: {
        children: parentClone.children,
      }
    });
    assert.equal(grandparent.parent.children.firstObject.name, 'Pat', 'Name is Pat');
  });
});
