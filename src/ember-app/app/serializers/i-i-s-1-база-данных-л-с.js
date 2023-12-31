import { Serializer as БазаДанныхЛСSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-база-данных-л-с';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БазаДанныхЛСSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
