// ==========================================================================
// Project:   Sproutweets.userController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sproutweets.userController = SC.ObjectController.create(
/** @scope Sproutweets.userController.prototype */ {
  contentBinding: 'Twitter.user',
  
  updatesCountFormatted: function() {
    return this.formatWithCommas(this.get('updatesCount'));
  }.property('updatesCount').cacheable(),
  
  followersCountFormatted: function() {
    return this.formatWithCommas(this.get('followersCount'));
  }.property('followersCount').cacheable(),
  
  friendsCountFormatted: function() {
    return this.formatWithCommas(this.get('friendsCount'));
  }.property('friendsCount').cacheable(),
  
  formatWithCommas: function(str) {
    var n, ret = [];
    if (!str) return '';
    n = str.toString();
    
    if (n.length < 4) return n;
    
    while (n.length > 3) {
      ret.unshift(n.substr(n.length-3));
      n = n.substr(0,n.length-3);
    }
    ret.unshift(n);

    return ret.join(',');
  }
}) ;
