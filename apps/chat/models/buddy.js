// ==========================================================================
// Project:   Chat.Buddy
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Chat */

/** @class

  (Document your Model here)

  @extends SC.Record
  @extends SC.TreeItemContent
  @version 0.1
*/
Chat.Buddy = SC.Record.extend( SC.TreeItemContent,
/** @scope Chat.Buddy.prototype */ {
  
  count: 0, // no buddies in a buddy...
  treeItemChildren: [],
  treeItemIsExpanded: NO,
  
  buddyGroup: SC.Record.toOne('Chat.BuddyGroup'),
  
  accountName: SC.Record.attr(String),
  
  firstName: SC.Record.attr(String),
  lastName: SC.Record.attr(String),
  fullName: function() {
    return this.getEach('firstName', 'lastName').join(' ') ;
  }.property('firstName', 'lastName').cacheable(),
  
  imageURL: SC.Record.attr(String)
  
});
