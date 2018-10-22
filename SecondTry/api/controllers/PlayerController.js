/**
 * PlayerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    getPlayerName: async function (req, res) {
        var foundGroup = await Group.find({
            id: req.param('slackid')
        });

        res.json({
            playerName: foundGroup[0].primaryEntity.name
        });
    },
    
    getPlayerStats: async function (req, res) {
        var foundGroup = await Group.find({
            id: req.param('slackid')
        });

        res.json({
            playerStats: foundGroup[0].primaryEntity.stats
        });
    }

};

