/**
 * Stats.js
 *
 * @description :: Defines an Entity's stats.
 * 
 */

module.exports = {

  attributes: {
    health: {
      type: 'number',
      defaultsTo: 100
    },
    stamina: {
      type: 'number',
      defaultsTo: 100
    },
    //Basic Stats
    strength: {
      type: 'number',
      defaultsTo: 10
    },
    dexterity: {
      type: 'number',
      defaultsTo: 10
    },
    intelligence: {
      type: 'number',
      defaultsTo: 10
    },
    //Fighting Stats
    oneHanded: {
      type: 'number',
      defaultsTo: 1
    },
    twoHanded: {
      type: 'number',
      defaultsTo: 1
    },
    ranged: {
      type: 'number',
      defaultsTo: 1
    },
    duoWield: {
      type: 'number',
      defaultsTo: 1
    },
    elamentalMagic: {
      type: 'number',
      defaultsTo: 1
    },
    bloodMagic: {
      type: 'number',
      defaultsTo: 0
    },
    //Skills
    crafting: {
      type: 'number',
      defaultsTo: 1
    }
  },

};