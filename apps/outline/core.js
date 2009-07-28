// ==========================================================================
// Project:   Outline
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Outline */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Outline = SC.Object.create(
  /** @scope Outline.prototype */ {

  NAMESPACE: 'Outline',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),
  
  Content: SC.Object.extend({
    
    treeItemIsExpanded: YES,
    
    title: "Root",
    
    count: 10,
    
    treeItemChildren: function() {
      var idx, count = this.get('count'), ret = [];
      
      for(idx=0;idx<count;idx++) {
        ret.push(Outline.Content.create({
          title: "%@.%@".fmt(this.get('title'), idx),
          treeItemIsExpanded: NO
        }));
      }
      
      return ret ;
    }.property().cacheable()
    
  })
  

}) ;
