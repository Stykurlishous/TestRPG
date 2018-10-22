/**
 * Stats.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    strength: {
      type: 'number',
      defaultsTo: 10
    },
    health: {
      type: 'number',
      defaultsTo: 100
    }

  },

  getType: function() {
    return 'Stats';
  }

};

