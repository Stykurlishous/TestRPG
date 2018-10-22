/**
 * GroupControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    createNewGroup: async function (req, res) {
        var newStats = await Stats.create({}).fetch();
        
        var newPlayer = await Entity.create({
            id: req.param('playerid'),
            name: req.param('playername'),
            description: 'Who are you?',
            instanceType: 'Player',
            equipment: {},
            inventory: {},
            stats: newStats
        }).fetch();

        var newGroup = await Group.create({
            id: req.param('slackid'),
            user: req.param('slackname'),
            primaryEntity: newPlayer,
            membersOne: {},
            membersTwo: {},
            quests: {}
        }).fetch();
        
        res.json({
            Player: 'Hello, ' + newPlayer.name + '! Welcome to the Test RPG',
            groupCreated: newGroup,
            newPlayer: newPlayer
        });
    },

    getGroup: async function (req, res) {
        var foundGroup = await Group.find({
            id: req.param('slackid')
        });

        res.json({
            groupFound: foundGroup
        });
    }

};