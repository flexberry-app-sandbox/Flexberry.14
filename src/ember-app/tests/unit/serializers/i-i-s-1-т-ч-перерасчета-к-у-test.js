import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-1-т-ч-перерасчета-к-у', 'Unit | Serializer | i-i-s-1-т-ч-перерасчета-к-у', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-1-т-ч-перерасчета-к-у',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-1-база-данных-л-с',
    'model:i-i-s-1-должности',
    'model:i-i-s-1-жилец',
    'model:i-i-s-1-квитанция',
    'model:i-i-s-1-комму-услуги',
    'model:i-i-s-1-организация',
    'model:i-i-s-1-перерасчет-к-у',
    'model:i-i-s-1-сотрудники',
    'model:i-i-s-1-т-ч-перерасчета-к-у',
    'model:i-i-s-1-т-чквитанции',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
