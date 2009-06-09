// ==========================================================================
// Project:   Chat
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Chat */

function main() {
  Chat.getPath('mainPage.mainPane').append() ;
  
  // create the root of our tree controller...
  var buddyGroups = Chat.store.findAll(Chat.BuddyGroup) ;
  var buddyList =  SC.Object.create(SC.TreeItemContent, {
    treeItemIsGrouped: YES,
    treeItemChildren: buddyGroups,
    count: buddyGroups.get('length'),
  });
  
  // var buddyList = Chat.store.findAll(Chat.BuddyGroup) ;
  
  Chat.buddyController.set('content', buddyList) ;
};
