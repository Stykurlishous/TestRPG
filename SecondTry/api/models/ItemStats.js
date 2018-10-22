/**
 * ItemStats.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'String',
      required: true
    },
    instanceType: {
      type: 'String',
      isIn: ['Armor', 'Weapon', 'Tool', 'Quest'],
      required: true
    },
    level: {
      type: 'number'
    }

  },

  getType: function() {
    return 'ItemStats'
  }

};

