import {
  defineNamespace,
  defineProjections,
  Model as КоммуУслугиMixin
} from '../mixins/regenerated/models/i-i-s-1-комму-услуги';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КоммуУслугиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
