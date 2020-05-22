import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('parent', {
  default: {
    children: FactoryGuy.hasMany('child', 1),
  },
});
