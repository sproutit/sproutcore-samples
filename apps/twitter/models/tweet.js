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

  primaryKey: "id",

  text: SC.Record.attr(String),
  
  profileImage: SC.Record.attr(String, { key: "profile_image_url" }),
  
  _blankUrl: 'about:blank',

  url: function() {
    var txt = this.get('text'), tokens, i, tLen;
    if(txt) {
      tokens = txt.split(' ');
      for(i=0, tLen = tokens.length; i<tLen; i++) {
        if(tokens[i].match('http:')) return tokens[i];
      }
    }
    return this._blankUrl;
  }.property('text').cacheable()

}) ;
