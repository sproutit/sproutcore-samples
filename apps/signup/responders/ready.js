// ==========================================================================
// Project:   Signup
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Signup */

/** @namespace

  The default responder state.  This is the normal state while we wait for the
  user to click on the signup button.
  
  @extends SC.Responder
*/
Signup.READY = SC.Responder.create({
  
  /** called when the user clicks on the signup button */
  signup: function() {
    Signup.makeFirstResponder(Signup.SIGNUP); // begin signup again
  },
  
  /** called when the user clicks on the logout button.  */
  logout: function() {
    Signup.currentAccountController.set('content', null);
  }
  
  
});