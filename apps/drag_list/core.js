// ==========================================================================
// Project:   DragList
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals DragList */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
DragList = SC.Object.create(
  /** @scope DragList.prototype */ {

  NAMESPACE: 'DragList',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),
  
  // TODO: Add global constants or singleton objects needed by your app here.
  doubleClickedEmployees: function(sender) {
    var len = DragList.employeesController.getPath('selection.length') ;
    alert("You clicked on %@ employee%@".fmt(len, len>1?'s':''));
  }
  
}) ;
