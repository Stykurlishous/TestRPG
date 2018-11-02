/**
 * Section.js
 *
 * @description :: A small part of a room.  Represents traversal through a conversation.
 * 
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true
    },
    isOneTime: {
      type: 'boolean'
    },
    isModified: {
      type: 'boolean'
    },
    isExit: {
      type: 'boolean'
    },
    description: {
      type: 'string',
      required: true
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
    zero: {
      type: 'ref'
    },
    one: {
      type: 'ref'
    },
    two: {
      type: 'ref'
    },
    three: {
      type: 'ref'
    },
  },

};