// ==========================================================================
// Project:   Twitter.Tweet
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.Tweet = SC.Record.extend(
/** @scope Twitter.Tweet.prototype */ {
  primaryKey: 'id',

  text: SC.Record.attr(String),
  user: SC.Record.toOne('Twitter.User'),

  text: function() {
    var text;

    if (this.get('isRetweet')) {
      text = this.readAttribute('retweeted_status').text;
    } else {
      text = this.readAttribute('text');
    }

    return text;
  }.property().cacheable(),

  retweetScreenName: function() {
    return this.readAttribute('retweeted_status').user.screen_name;
  }.property().cacheable(),

  isRetweet: function() {
    return !!this.readAttribute('retweeted_status');
  }.property().cacheable()
}) ;
