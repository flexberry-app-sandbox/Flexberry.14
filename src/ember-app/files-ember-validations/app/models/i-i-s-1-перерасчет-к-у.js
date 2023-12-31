import {
  defineNamespace,
  defineProjections,
  Model as ПерерасчетКУMixin
} from '../mixins/regenerated/models/i-i-s-1-перерасчет-к-у';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПерерасчетКУMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
