/**
 * Area.js
 *
 * @description :: Represents a collection of rooms.  An area must always have a starting place that controlls how 
 *                 a player enters a new area.
 * 
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    startingRoom: {
      type: 'string',
      required: true
    },
    decisions: {
      type: 'json',
      columnType: 'array'
    }
  },

};