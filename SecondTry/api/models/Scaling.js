/**
 * Scaling.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //Weapon Scaling
    strength: {
      type: 'number',
      columnType: 'float'
    },
    dexterity: {
      type: 'number',
      columnType: 'float'
    },
    intelligence: {
      type: 'number',
      columnType: 'float'
    }
  },

};