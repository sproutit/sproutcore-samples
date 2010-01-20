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
  contentBinding: SC.Binding.from('Twitter.listsController.selection').single(),

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
      this.addUserToSelectedList(user);
    } else {
      this.set('loadingUser', user);
      user.addObserver('status', this, this.userStatusDidChange);
    }
  },
  
  userStatusDidChange: function() {
    var user = this.get('loadingUser');
    
    if (user.get('status') & SC.Record.READY) {
      this.addUserToSelectedList(user);
    }
  },
  
  addUserToSelectedList: function(user) {
    var list = this.get('content'),
        users = list.getPath('membership.users');
        
    users.pushObject(user);
  }
}) ;
