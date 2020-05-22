import Fragment from 'ember-data-model-fragments/fragment';
import { fragmentArray } from 'ember-data-model-fragments/attributes';

export default class Parent extends Fragment {
  @fragmentArray('child') children;
}
