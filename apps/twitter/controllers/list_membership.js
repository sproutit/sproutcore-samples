// ==========================================================================
// Project:   Twitter.listMembershipController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.listMembershipController = SC.ObjectController.create(
/** @scope Twitter.listMembershipController.prototype */ {
  contentBinding: 'Twitter.listController.membership',

  isLoading: NO,

  statusDidChange: function() {
    Twitter.sendAction('listMembershipStatusDidChange');
  }.observes('status')
}) ;
