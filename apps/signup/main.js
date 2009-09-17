// ==========================================================================
// Project:   Signup
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Signup */

// The main function that will start the application running.  
Signup.main = function main() {

  // Show the main Pane on the screen
  Signup.getPath('mainPage.mainPane').append() ;

  // Go into the initial state
  Signup.makeFirstResponder(Signup.START);

} ;

function main() { Signup.main(); }
