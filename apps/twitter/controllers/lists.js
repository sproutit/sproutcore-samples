// ==========================================================================
// Project:   Twitter.listsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.listsController = SC.ArrayController.create(
/** @scope Twitter.listsController.prototype */ {
  reload: function() {
    var query, lists;
    console.log('reload');
    query = this._query;
    if (!query) {
      this._query = query = SC.Query.local('Twitter.List', {
        username: Twitter.loginController.get('username'),
        password: Twitter.loginController.get('password')
      });
    }
    
    lists = Twitter.store.find(query);
    
    this.set('content', lists);
  },
  
  createNewList: function() {
    var list = Twitter.store.createRecord(Twitter.List, {
      name: 'Untitled list'
    });
  },
  
  commitRecords: function() {
    Twitter.store.commitRecords();
  }
}) ;
