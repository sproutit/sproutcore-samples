// ==========================================================================
// Project:   Signup.currentAccountController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Signup */

/** @class

  Represents the current account to display in the summary

  @extends SC.ObjectController
*/
Signup.currentAccountController = SC.ObjectController.create({

  // determines which console to display in the main container.  must be 
  // one of 'accountInfo' or 'prompt'
  nowShowing: function() {
    return this.get('hasContent') ? 'accountInfo' : 'prompt'
  }.property('hasContent').cacheable()
  
}) ;
