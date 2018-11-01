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

        var northRoom, eastRoom, southRoom, westRoom = null;
        if (activeGroup.room.north !== null) {
            northRoom = await Room.find({name: activeGroup.room.north.name});
        }
        if (activeGroup.room.east !== null) {
            eastRoom = await Room.find({name: activeGroup.room.east.name});
        }
        if (activeGroup.room.south !== null) {
            southRoom = await Room.find({name: activeGroup.room.south.name});
        }
        if (activeGroup.room.west !== null) {
            westRoom = await Room.find({name: activeGroup.room.west.name});
        }

        return res.json({
            north: northRoom[0] ? northRoom[0] : null,
            east: eastRoom[0] ? eastRoom[0] : null,
            south: southRoom[0] ? southRoom[0] : null,
            west: westRoom[0] ? westRoom[0] : null
        });
    },
    
    listSections: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        var sectionIds = [];
        for (var index in activeGroup.room.sections) {
            sectionIds.push(activeGroup.room.sections[index])
        }
        var availableSections = await Section.find({
            id: sectionIds
        });

        return res.json({
            sections: availableSections
        });
    },

    travel: async function(req, res) {
        var activeGroup = await Group.find({
            id: req.param('slackid')
        });

        var direction = req.param('direction');
        var currentRoom = activeGroup[0].room;

        if (currentRoom[direction] !== null) {
            foundRoom = await Room.find({
                name: currentRoom[direction]
            });
            await Group.update({id: req.param('slackid')}, {room: foundRoom[0]});

            return res.json({
                nextRoom: foundRoom
            });
        };

        return res.json({
            nextRoom: null
        });
    },

};

