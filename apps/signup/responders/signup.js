// ==========================================================================
// Project:   Signup
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Signup */

/** @namespace

  The active state when the signup dialog is showing.
  
  @extends SC.Responder
*/
Signup.SIGNUP = SC.Responder.create({
  
  // when we become first responder, always show the signup panel
  didBecomeFirstResponder: function() {
    
    // Create a new user and set it as the root of the signup controller
    // so that we can edit it.
    var store = this._store = Signup.store.chain() ; // buffer changes
    var user  = store.createRecord(Signup.User, {});
    Signup.signupController.set('content', user); // for editing
    
    // then show the dialog
    var pane = Signup.getPath('signupPage.mainPane');
    pane.append(); // show on screen
    pane.makeFirstResponder(pane.contentView.firstName); // focus first field
  },
  
  // when we lose first responder, always hide the signup panel.
  willLoseFirstResponder: function() {
    
    // if we still have a store, then cancel first.
    if (this._store) {
      this._store.discardChanges();
      this._store = null ;
    }

    Signup.signupController.set('content', null); // cleanup controller
    Signup.getPath('signupPage.mainPane').remove();
  },
  
  // called when the OK button is pressed.
  submit: function() {
    this._store.commitChanges();
    this._store = null ;
    
    // find user in global store and set as global
    var user = Signup.store.find(Signup.signupController);
    Signup.currentAccountController.set('content', user);
    
    Signup.makeFirstResponder(Signup.READY);
  },
  
  // called when the Cancel button is pressed
  cancel: function() {
    this._store.discardChanges();
    this._store = null;

    // reset app
    Signup.makeFirstResponder(Signup.READY);
  }
  
});