// ==========================================================================
// Project:   Twitter.tweetController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Twitter.membershipController = SC.ArrayController.create(
/** @scope Twitter.tweetController.prototype */ {

  selectionChanged: function() {
    var user = this.get('selection').firstObject();
    var screenName = user.get('screenName');
     var twitterQuery = SC.Query.remote(Twitter.Tweet, {userID: screenName});
     var tweets = Twitter.store.find(twitterQuery);
     Twitter.userTweetsController.set('content', tweets);
   }.observes('selection')
   
}) ;
