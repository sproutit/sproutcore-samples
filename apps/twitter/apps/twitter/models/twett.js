// ==========================================================================
// Project:   Twitter.Twett
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Twitter.Twett = SC.Record.extend(
/** @scope Twitter.Twett.prototype */ {
  primaryKey: "id",
  
  noContentUrl: 'about:blank',

  url: function() {
    var txt = this.get('text'), tokens, i, tLen;
    if(txt) {
      tokens = txt.split(' ');
      for(i=0, tLen = tokens.length; i<tLen; i++) {
        if(tokens[i].match('http:')) return tokens[i];
      }
    }
    return this.noContentUrl;
  }.property('text').cacheable()
}) ;

