// ==========================================================================
// Project:   Twitter.User
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.User = SC.Record.extend(
/** @scope Twitter.User.prototype */ {
  primaryKey: "screen_name",

  name: SC.Record.attr(String),
  
  screenName: SC.Record.attr(String, { key: "screen_name" }),
  
  profileImage: SC.Record.attr(String, { key: "profile_image_url" })
  
}) ;
