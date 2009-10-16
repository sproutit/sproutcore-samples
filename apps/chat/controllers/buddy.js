// ==========================================================================
// Project:   Chat.buddyController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Chat */

sc_require('core');

/** @class
  
  An SC.TreeController that backs a "buddy-list" view as might be used in a
  chat client.
  
  @extends SC.TreeController
*/
Chat.buddyController = SC.TreeController.create(
/** @scope Chat.buddyController.prototype */ {
  
  content: null,
  
  treeItemIsGrouped: YES,
  treeItemChildrenKey: 'buddyGroups',
  
  allowsEmptySelection: NO,
  allowsMultipleSelection: NO
  
});
