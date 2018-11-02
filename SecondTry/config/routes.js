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

  /** Area Routes */
  '/area/create/:slackid': 'AreaController.generateAlpha_01',
  '/area/clearall': 'AreaController.clearAll',

  /** Room Routes */
  '/room/examine/:slackid': 'RoomController.examine',
  '/room/rooms/:slackid': 'RoomController.listNextRooms',
  '/room/sections/:slackid': 'RoomController.listSections',
  '/room/entersection/:slackid/:sectionname': 'RoomController.enterSection',
  '/room/travel/:slackid/:direction': 'RoomController.travel',

  /** Section Routes */
  '/section/examine/:slackid': 'SectionController.examine',
  '/section/sections/:slackid': 'SectionController.listSections',
  '/section/travel/:slackid/:sectionname': 'SectionController.travel',

  /** Group Routes */
  '/group/create/:slackid/:slackname/:playerid/:playername': 'GroupController.createNewGroup',
  '/group/fetch/:slackid': 'GroupController.getGroup',

  /** Player Routes */
  '/player/getname/:slackid': 'PlayerController.getPlayerName',
  '/player/getstats/:slackid': 'PlayerController.getPlayerStats',

  /** Item Routes */
  '/item/dropitem/:itemid': 'ItemController.dropWeaponTest',

};
