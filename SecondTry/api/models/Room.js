/**
 * Room.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
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
    area: {
      type: 'ref'
    },
    sections: {
      type: 'json',
      columnType: 'array'
    },
    north: {
      type: 'string'
    },
    east: {
      type: 'string'
    },
    south: {
      type: 'string'
    },
    west: {
      type: 'string'
    }
  },

};