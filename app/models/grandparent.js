import Model from '@ember-data/model';
import { fragment } from 'ember-data-model-fragments/attributes';

export default class GrandparentModel extends Model {
  @fragment('parent') parent;
}
