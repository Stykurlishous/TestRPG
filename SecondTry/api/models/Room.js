/**
 * Room.js
 *
 * @description :: The main space a player interacts with. The player must always be in one and only one room.
 *                 A room may connect with up to four other rooms via the cardinal directions and a lookup key. 
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
    isModified: {
      type: 'boolean',
      defaultsTo: false
    },
    //NPC's
    members: {
      type: 'json',
      columnType: 'array'
    },
    //enemy: only one per room
    group: {
      type: 'ref'
    },
    //available items to pick up
    inventory: {
      type: 'json',
      columnType: 'array'
    },
    area: {
      type: 'ref'
    },
    connectsToArea: {
      type: 'ref'
    },
    //available starting sections
    sections: {
      type: 'json',
      columnType: 'array'
    },
    decisions: {
      type: 'json',
      columnType: 'array'
    },
    north: {
      type: 'ref'
    },
    east: {
      type: 'ref'
    },
    south: {
      type: 'ref'
    },
    west: {
      type: 'ref'
    }
  },

};