/**
 * Key.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      required: true
    },
    isVisable: {
      type: 'boolean',
      defaultsTo: false
    },
    description: {
      type: 'string'
    },
    requiresDecision: {
      type: 'string'
    },
    requiresMoney: {
      type: 'number'
    },

  },

};

