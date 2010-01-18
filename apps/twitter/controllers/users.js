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
  contentBinding: 'Twitter.listMembershipController.users',
  
  selectionChanged: function() {
    console.log('selection');
    var user = this.get('selection').firstObject();
    var screenName = user.get('screenName');
    var twitterQuery = SC.Query.remote(Twitter.Tweet, {userID: screenName});
    var tweets = Twitter.store.find(twitterQuery);
    Twitter.userTweetsController.set('content', tweets);
   }.observes('selection')
}) ;
