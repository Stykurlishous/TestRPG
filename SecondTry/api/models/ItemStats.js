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
      isIn: ['Armor', 'Weapon', 'Material', 'Quest'],
      required: true
    },
    subType: {
      type: 'String',
      isIn: ['Helmet', 'Body', 'OneHanded', 'TwoHanded', 'Dagger', 'Bow', 'Staff', 'Shield', 'MainQuest', 'SideQuest'],
      required: true
    },
    baseLevel: {
      type: 'number'
    },
    scaling: {
      type: 'ref'
    }
  },

};