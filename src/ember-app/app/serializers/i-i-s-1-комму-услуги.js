import { Serializer as КоммуУслугиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-комму-услуги';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КоммуУслугиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
