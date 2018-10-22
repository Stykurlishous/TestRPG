/**
 * Group.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    user: {
      type: 'string',
      required: true
    },
    primaryEntity: {
      type: 'ref',
      required: true
    },
    membersOne: {
      type: 'json',
      columnType: 'array',
      required: false
    },
    membersTwo: {
      type: 'json',
      columnType: 'array',
      required: false
    },
    quests: {
      type: 'json',
      columnType: 'array',
      required: false
    },
    room: {
      type: 'ref'
    }
  },

  getType: function() {
    return 'Group';
  }

};

