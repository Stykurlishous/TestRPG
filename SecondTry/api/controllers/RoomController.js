/**
 * RoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    examine: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        return res.json({
            description: activeGroup.room.description
        });
    },

    listNextRooms: async function (req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        return res.json({
            north: activeGroup.room.north,
            east: activeGroup.room.east,
            south: activeGroup.room.south,
            west: activeGroup.room.west
        });
    },
    
    listSections: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        var sections= [];
        for (var index in activeGroup.room.sections) {
            sections.push(activeGroup.room.sections[index])
        }

        if (sections.length === 0) {
            return res.json({
                sections: null
            });
        }

        return res.json({
            sections
        });
    },

    enterSection: async function(req, res) {
        var section = await Section.find({name: req.param('sectionname')});
        await Group.update({id: req.param('slackid')}, {section: section[0]});
        return res.json({
            description: section[0].description
        });
    },

    travel: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        var direction = req.param('direction');
        var currentRoom = activeGroup.room;

        if (currentRoom[direction] !== null) {
            var foundRoom = await Room.find({
                name: currentRoom[direction].name
            });
            await Group.update({id: req.param('slackid')}, {room: foundRoom[0]});

            return res.json({
                nextRoom: foundRoom[0]
            });
        };

        return res.json({
            nextRoom: null
        });
    },

};

