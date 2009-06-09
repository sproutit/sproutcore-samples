// ==========================================================================
// Project:   Chat.BuddyList Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Chat */

sc_require('models/buddy_group');

Chat.BuddyGroup.FIXTURES = [
  { guid: 1,
    name: "Family",
    buddies: [1,2]
  },{
    guid: 2,
    name: "Recent Buddies",
    buddies: [3,4]
  },{
    guid: 3,
    name: "Offline",
    buddies: [5]
  }
];
