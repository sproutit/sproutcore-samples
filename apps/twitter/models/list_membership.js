// ==========================================================================
// Project:   Twitter.ListMembership
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.ListMembership = SC.Record.extend(
/** @scope Twitter.ListMembership.prototype */ {
  users: SC.Record.toMany('Twitter.User'),
  
  screenName: SC.Record.attr(String, { key: 'screen_name' })
}) ;
