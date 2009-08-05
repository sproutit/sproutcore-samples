// ==========================================================================
// Project:   Signup
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Signup */

/** @namespace

  The initial responder state.  Always transitions to the proper state.  If
  you have an account, shows the info.  Otherwise starts the signup 
  automatically..
  
  @extends SC.Responder
*/
Signup.START = SC.Responder.create({
  
  didBecomeFirstResponder: function() {
    var state = Signup.currentAccountController.get('hasContent') ? Signup.READY : Signup.SIGNUP ;
    Signup.invokeLater(Signup.makeFirstResponder, 1, state)
  }  
  
});