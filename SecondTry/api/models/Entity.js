/**
 * Entity.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    instanceType: {
      type: 'string',
      isIn: ['Player', 'NPC', 'Enemy', 'Quest']
    },
    equipment: {
      type: 'json',
      columnType: 'array',
      required: false
    },
    inventory: {
      type: 'json',
      columnType: 'array',
      required: false
    },
    stats: {
      type: 'ref',
      required: false
    }

  },

  getType: function() {
    return 'Entity';
  }

};

