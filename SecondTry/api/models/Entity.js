/**
 * Entity.js
 *
 * @description :: Defines a character. Can be the player, NPC, Enemy, or Quest. 
 * 
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
    isAlive: {
      type: 'boolean',
      defaultsTo: true
    },
    isFirstEncounter: {
      type: 'boolean',
      defaultsTo: true
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
      type: 'ref'
    },
    stats: {
      type: 'ref',
      required: false
    },
    decisions: {
      type: 'json',
      columnType: 'array'
    }
  },

};