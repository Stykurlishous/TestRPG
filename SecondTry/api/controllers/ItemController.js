/**
 * ItemController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    dropWeaponTest: function(req, res) {
        var itemid = req.param('itemid');
        res.json({
            hello: "world",
            item: itemid
        });
    },

};