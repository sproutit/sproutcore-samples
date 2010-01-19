// ==========================================================================
// Project:   Twitter.listController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.listController = SC.ObjectController.create(
/** @scope Twitter.listController.prototype */ {
  contentBinding: 'Twitter.listsController*selection.firstObject',
  
  newUserName: '',
  loadingUser: null,

  showUserPane: function() {
    var pane = Twitter.getPath('listsPage.addUserPane');
    
    this.set('newUserName', '');
    pane.append();
  },
  
  removePane: function() {
    var pane = Twitter.getPath('listsPage.addUserPane');
    pane.remove();
  },
  
  saveNewUser: function() {
    var pane = Twitter.getPath('listsPage.addUserPane'),
        userName = this.get('newUserName'),
        user = Twitter.store.find(Twitter.User, userName);
        
    pane.remove();
    
    if (user.get('status') & SC.Record.READY) {
      console.log('User was already in memory');
      this.addUserToSelectedList(user);
    } else {
      this.set('loadingUser', user);
      console.log('Adding an observer to the user');
      user.addObserver('status', this, this.userStatusDidChange);
    }
  },
  
  userStatusDidChange: function() {
    console.log('Status did change');
    var user = this.get('loadingUser');
    
    if (user.get('status') & SC.Record.READY) {
      console.log('Record is ready');
      this.addUserToSelectedList(user);
    } else {
      console.log(user.get('status'));
    }
  },
  
  addUserToSelectedList: function(user) {
    console.log('Adding user to list');
    var list = this.get('content'),
        users = list.getPath('membership.users');
        
    users.pushObject(user);
  }
}) ;
