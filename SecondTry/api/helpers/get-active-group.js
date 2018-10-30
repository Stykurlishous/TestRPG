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

    return exits.success(activeGroup);

  }
};