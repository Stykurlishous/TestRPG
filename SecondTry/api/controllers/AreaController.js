/**
 * AreaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * 
 */

module.exports = {
  
    generateAlpha_01: async function (req, res) {
        var activeGroup = await Group.find({
            id: req.param('slackid')
        });
        
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
                0: 'alpha_01-R0-0',
                1: 'alpha_01-R0-1'
            },
            north: 'alpha_01-R1'
        }).fetch();
        var porchRoom = await Room.create({
            name: 'alpha_01-R1',
            description: 'You step out onto the porch outside your cabin. A small dirt road cuts through the sleepy village right up to the steps.',
            area: alpha_01,
            south: 'alpha_01-R0'
        }).fetch();

        // Sections
        var srSection0 = await Section.create({
            id: 'alpha_01-R0-0',
            description: 'A small desk',
            room: startingRoom,
        }).fetch();
        var srSection1 = await Section.create({
            id: 'alpha_01-R0-1',
            description: 'The old, worn door of your cabin. As you look, you hear a knock on the door',
            room: startingRoom,
        }).fetch();
        var srSection2 = await Section.create({
            id: 'alpha_01-R0-2',
            description: 'You approach and open the door',
            room: porchRoom,
        }).fetch();
        var srSection3 = await Section.create({
            id: 'alpha_01-R0-3',
            description: 'You wait until you hear footsteps fading away',
            room: startingRoom,
        }).fetch();

        await Group.update({id: req.param('slackid')}, {room: startingRoom});
        return res.json({
            group: activeGroup
        });
    },

};

