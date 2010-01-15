// ==========================================================================
// Project:   Twitter.twettController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Twitter.twettController = SC.ArrayController.create(
/** @scope Twitter.twettController.prototype */ {

  query: '',
  url: 'about:blank',
  
  invokeQuery: function(){
    if(this.get('query').length%2 !== 0) return;
    //SC.Request.manager.cancelAll();
    var twitterQuery = SC.Query.remote(Twitter.Twett, {query: this.get('query')});
    var twetts = Twitter.store.find(twitterQuery);
    Twitter.twettController.set('content', twetts);
  }.observes('.query'),
  
  selectionChanged: function() {
    var s, fO, url; 
    s = this.get('selection');
    if(s){
      fO = s.firstObject();
      url = fO.get('url');
      this.set('url', url);
    }
  }.observes('selection')

}) ;
