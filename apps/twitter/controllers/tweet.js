// ==========================================================================
// Project:   Twitter.tweetController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Twitter.tweetController = SC.ArrayController.create(
/** @scope Twitter.tweetController.prototype */ {

  url: 'about:blank',
  
  selectionChanged: function() {
    var s, fO, url; 
    s = this.get('selection');
    if(s){
      fO = s.firstObject();
      url = fO.get('url');
      this.set('url', url);
    }
  }.observes('selection'),
  
  query: '',
  
  invokeQuery: function(){
    var q=this.get('query');
    Twitter.mainPage.mainPane.tabView.set('nowShowing', "Twitter.searchPage.mainView");
    if(q.length===0 || q.length%2 !== 0) return;
    var twitterQuery = SC.Query.remote(Twitter.Tweet, {query: q});
    var tweets = Twitter.store.find(twitterQuery);
    Twitter.tweetController.set('content', tweets);
  }.observes('query')
  
}) ;
