/**
 * RoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    examine: async function(req, res) {
        var activeGroup = await Group.find({
            id: req.param('slackid')
        });

        return res.json({
            description: activeGroup[0].room.description
        });
    },
    
    listSections: async function (req, res) {
        var activeGroup = await Group.find({
            id: req.param('slackid')
        });

        var sectionIds = [];
        for (var index in activeGroup[0].room.sections) {
            sectionIds.push(activeGroup[0].room.sections[index])
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
            await Group.update({id: req.param('slackid')}, {room: foundRoom});

            return res.json({
                nextRoom: foundRoom
            });
        };

        return res.json({
            nextRoom: null
        });
    },

};

