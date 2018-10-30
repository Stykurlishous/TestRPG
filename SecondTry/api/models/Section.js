/**
 * Section.js
 *
 * @description :: A small part of a room.  Represents traversal through a conversation.
 * 
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      unique: true,
      required: true
    },
    isModified: {
      type: 'boolean',
      defaultsTo: false
    },
    description: {
      type: 'string',
      required: true
    },
    isExit: {
      type: 'boolean'
    },
    room: {
      type: 'ref',
      required: true
    },
    decision: {
      type: 'ref'
    },
    givesKey: {
      type: 'ref'
    },
    removesKey: {
      type: 'ref'
    },
    requiresKey: {
      type: 'ref'
    },
    //soft lookups to other sections
    optionZero: {
      type: 'string'
    },
    optionOne: {
      type: 'string'
    },
    optionTwo: {
      type: 'string'
    },
    optionThree: {
      type: 'string'
    },
  },

};