/**
 * SectionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    travel: async function (req, res) {
        var activeGroup = await Group.find({
            id: req.param('slackid')
        })[0];
    }

};

