// ==========================================================================
// Project:   IphoneDemo
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals IphoneDemo */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
IphoneDemo = SC.Object.create(
  /** @scope IphoneDemo.prototype */ {

  NAMESPACE: 'IphoneDemo',
  VERSION: '0.1.0',

  // This is your application store.  All of your model data should be loaded
  // into this store.  You can also chain this store with any persistant 
  // backends to provide server syncing.
  //store: SC.Store.create(),
  
  // When you are in development mode, this array will be populated with
  // any fixtures you create for testing and loaded automatically in your
  // main method.  When in production, this will be an empty array.
  FIXTURES: []

  // TODO: Add global constants or singleton objects needed by your app here.

}) ;
