/**
 * Inventory.js
 *
 * @description :: An entity's inventory.  Has a one to one relationship with Entity.
 * 
 */

module.exports = {

  attributes: {
    weapons: {
      type: 'json',
      columnType: 'array'
    },
    armor: {
      type: 'json',
      columnType: 'array'
    },
    materials: {
      type: 'json',
      columnType: 'array'
    },
    quest: {
      type: 'json',
      columnType: 'array'
    }
  },

};