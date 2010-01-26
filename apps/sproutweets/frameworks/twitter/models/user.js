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
  primaryKey: 'id',

  name: SC.Record.attr(String),
  screenName: SC.Record.attr(String, { key: 'screen_name' }),
  location: SC.Record.attr(String),
  description: SC.Record.attr(String),
  profileImage: SC.Record.attr(String, { key: 'profile_image_url' }),
  url: SC.Record.attr(String),
  protected: SC.Record.attr(Boolean),
  followersCount: SC.Record.attr(Number, { key: 'followers_count' }),
  friendsCount: SC.Record.attr(Number, { key: 'friends_count' }),
  createdAt: SC.Record.attr(Date, { key: 'created_at' }),
  favouritesCount: SC.Record.attr(Number, { key: 'favourites_count' }),
  updatesCount: SC.Record.attr(Number, { key: 'statuses_count' }),
  verified: SC.Record.attr(Boolean)
}) ;
