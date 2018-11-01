/**
 * SectionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    travel: async function (req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));
    }

};

