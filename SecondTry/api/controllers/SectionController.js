/**
 * SectionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    examine: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        if (activeGroup.section === null) {
            return res.json({
                description: ''
            });
        }

        return res.json({
            description: activeGroup.section.description
        });
    },
    
    listSections: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));

        if (activeGroup.section === null) {
            return res.json({
                zero: null,
                one: null,
                two: null,
                three: null
            });
        }

        return res.json({
            zero: activeGroup.section.zero,
            one: activeGroup.section.one,
            two: activeGroup.section.two,
            three: activeGroup.section.three,
        });
    },
    
    travel: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));
        var nextSectionArray = await Section.find({name: req.param('sectionname')});
        var nextSection = nextSectionArray[0];

        if (nextSection.isExit) {
            var nextRoom = nextSection.room;
            if (nextRoom.name === activeGroup.room.name) {
                await Group.update({id: activeGroup.id}, {section: null});
                return res.json({
                    description: activeGroup.room.description
                });
            }
            await Group.update({id: activeGroup.id}, {room: nextRoom, section: null});
            return res.json({
                description: nextRoom.description
            })
        }
        
        await Group.update({id: activeGroup.id}, {section: nextSection});
        return res.json({
            description: nextSection.description
        });
    }

};

