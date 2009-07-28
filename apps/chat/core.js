// ==========================================================================
// Project:   Chat
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Chat */

/** @namespace
  
  A sample app to demonstrate SC.TreeController and the new SC.CollectionView
  features in SproutCore 1.0.
  
  @extends SC.Object
*/
Chat = SC.Object.create(
/** @scope Chat.prototype */ {
    
  NAMESPACE: 'Chat',
  VERSION: '0.1.0',
  
  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures)
  
});
