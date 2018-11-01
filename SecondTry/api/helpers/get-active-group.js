module.exports = {
  friendlyName: 'Get active group',
  description: 'Retrieves a group based on a slack id ',

  inputs: {
    slackid: {
      type: 'string',
      required: true
    }
  },

  fn: async function (inputs, exits) {
    var activeGroup = await Group.find({
      id: inputs.slackid
    });

    for (var key in activeGroup) {
      if (activeGroup.hasOwnProperty(key)) {
        return exits.success(activeGroup[0]);
      }
    }
    return exits.success(null);

  }
};