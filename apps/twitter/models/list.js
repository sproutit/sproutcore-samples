// ==========================================================================
// Project:   Twitter.List
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  Represents a Twitter list.

  @extends SC.Record
  @version 0.1
*/
Twitter.List = SC.Record.extend(
/** @scope Twitter.List.prototype */ {

  primaryKey: 'id',
  
  name: SC.Record.attr(String),
  fullName: SC.Record.attr(String, { key: "full_name" }),

  membership: SC.Record.toOne('Twitter.ListMembership', { isMaster: NO })
}) ;
