/**
 * AreaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    generateAlpha_01: async function(req, res) {
        var activeGroup = await sails.helpers.getActiveGroup(req.param('slackid'));
        
        // Area
        var alpha_01 = await Area.create({
            name: 'alpha_01',
            description: 'Test Area - Alpha_01',
            startingRoom: 'alpha_01-R0'
        }).fetch();
        
        // Rooms
        var startingRoom = await Room.create({
            name: 'alpha_01-R0',
            description: 'Your small cabin. Old but familiar.',
            area: alpha_01,
            sections: {
                0: {
                    description: 'Examine your desk',
                    name: 'alpha_01-R0-0'
                },
                1: {
                    description: 'Examine your door',
                    name: 'alpha_01-R0-1'
                }
            },
        }).fetch();
        var porchRoom = await Room.create({
            name: 'alpha_01-R1',
            description: 'You are on on the porch outside your cabin. A small dirt road cuts through the sleepy village right up to the steps.',
            area: alpha_01,
            south: {
                description: 'Head inside your cabin',
                name: 'alpha_01-R2'
            },
            north: {
                description: 'Step out onto the road',
                name: 'alpha_01-R3'
            }
        }).fetch();
        var cabinRoom = await Room.create({
            name: 'alpha_01-R2',
            description: 'Your small cabin. Old but familiar.',
            area: alpha_01,
            sections: {
                0: {
                    description: 'Examine your desk',
                    name: 'alpha_01-R0-0'
                }
            },
            north: {
                description: 'Head out your front door',
                name: 'alpha_01-R1'
            }
        }).fetch();
        var roadRoom = await Room.create({
            name: 'alpha_01-R3',
            description: 'You are on the road outside your cabin. You look around and see the small village of Edgewater.',
            area: alpha_01,
            south: {
                description: 'Step back onto your porth',
                name: 'alpha_01-R1'
            }
        }).fetch();

        // Sections
        var srSection0 = await Section.create({
            name: 'alpha_01-R0-0',
            isOneTime: false,
            isExit: true,
            description: 'A small desk',
            room: startingRoom
        }).fetch();
        var srSection1 = await Section.create({
            name: 'alpha_01-R0-1',
            description: 'The old, worn door of your cabin. As you look, you hear a knock on the door',
            isOneTime: true,
            room: startingRoom,
            zero: {
                description: 'Answer the door',
                name: 'alpha_01-R0-2'
            },
            one: {
                description: 'Do nothing',
                name: 'alpha_01-R0-3'
            }
        }).fetch();
        var srSection2 = await Section.create({
            name: 'alpha_01-R0-2',
            isExit: true,
            description: 'You approach and open the door',
            room: porchRoom
        }).fetch();
        var srSection3 = await Section.create({
            name: 'alpha_01-R0-3',
            isExit: true,
            description: 'You wait until you hear footsteps fading away',
            room: startingRoom,
        }).fetch();

        await Group.update({id: req.param('slackid')}, {room: startingRoom});
        return res.json({
            success: true
        });
    },

    clearAll: async function(req, res) {
        await Area.destroy({});
        await Room.destroy({});
        await Section.destroy({});
        await Decision.destroy({});
        await Key.destroy({});
        await Group.destroy({});
        await Entity.destroy({});
        await Stats.destroy({});

        return res.json({
            success: true
        });
    },

};

