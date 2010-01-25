// ==========================================================================
// Project:   Sproutweets.loginController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sproutweets.loginController = SC.Object.create(
/** @scope Sproutweets.loginController.prototype */ {
  loggingIn: NO,
  
  errorMessage: '',
  
  BAD_CREDENTIALS_ERROR: "_Sorry, wrong username or password.  Try again?"
}) ;
