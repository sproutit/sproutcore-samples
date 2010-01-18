// ==========================================================================
// Project:   Twitter.usersController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.usersController = SC.ArrayController.create(
/** @scope Twitter.usersController.prototype */ {
  contentBinding: 'Twitter.listMembershipController.users'
}) ;
