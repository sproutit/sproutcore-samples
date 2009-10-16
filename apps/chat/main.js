// ==========================================================================
// Project:   Chat
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Chat */

function main() {
  Chat.getPath('mainPage.mainPane').append() ;
  
  // create the root of our tree controller...
  var buddyGroups = Chat.store.find(Chat.BuddyGroup).toArray() ;
  var buddyList =  SC.Object.create(SC.TreeItemContent, {
    treeItemIsGrouped: YES,
    treeItemChildren: buddyGroups,
    count: buddyGroups.get('length'),
  });
  
  // var buddyList = Chat.store.findAll(Chat.BuddyGroup) ;
  
  Chat.buddyController.set('content', buddyList) ;
};
