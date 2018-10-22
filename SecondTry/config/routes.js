/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },

  /** Item Routes */
  '/item/dropitem/:itemid': 'ItemController.dropWeaponTest',

  /** Group Routes */
  '/group/create/:slackid/:slackname/:playerid/:playername': 'GroupController.createNewGroup',
  '/group/fetch/:slackid': 'GroupController.getGroup',

  /** Player Routes */
  'player/getname/:slackid': 'PlayerController.getPlayerName',
  '/player/getstats/:slackid': 'PlayerController.getPlayerStats'

};
