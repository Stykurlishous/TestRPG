/**
 * Item.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    description: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    sellPrice: {
      type: 'number',
      required: false
    },
    isSellable: {
      type: 'boolean',
      required: true
    },
    isQuestItem: {
      type: 'boolean',
      defaultsTo: false
    },
    instanceType: {
      type: 'string',
      isIn: ['Armor', 'Weapon', 'Material', 'Quest'],
      required: true
    },
    stats: {
      type: 'ref',
      required: false
    }
  },

};

