// ==========================================================================
// Project:   Chat.BuddyGroup
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Chat */

/** @class

  (Document your Model here)

  @extends SC.Record
  @extends SC.TreeItemContent
  @version 0.1
*/
Chat.BuddyGroup = SC.Record.extend( SC.TreeItemContent,
/** @scope Chat.BuddyGroup.prototype */ {
  
  count: function() {
    return this.getPath('buddies.length') ;
  }.property('*buddies.length').cacheable(),
  
  buddies: SC.Record.toMany('Chat.Buddy'),
  treeItemChildren: function() {
    return this.get('buddies') ;
  }.property('buddies').cacheable(),
  treeItemBranchIndexes: function() { return SC.IndexSet.EMPTY; },
  
  name: SC.Record.attr(String),
  fullName: function() {
    return this.get('name') ;
  }.property('name').cacheable()
  
});
