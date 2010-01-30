// ==========================================================================
// Project:   Sproutweets.START
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Sproutweets Twitter*/

/** @class

  (Document Your State Here)

  @extends SC.Responder
*/
Sproutweets.START = SC.Responder.create(
/** @scope Sproutweets.START.prototype */ {
  didBecomeFirstResponder: function() {
    Twitter.store = Sproutweets.store;
    var loginPane = Sproutweets.getPath('mainPage.loginPane');
    loginPane.append();
  },
  
  login: function() {
    var username = Sproutweets.loginController.get('username'),
        password = Sproutweets.loginController.get('password');

    Twitter.login(username, password, this, 'loginResponseReceived');
    Sproutweets.loginController.set('loggingIn', YES);
  },
    
  loginResponseReceived: function(success) {
    var pane;
    Sproutweets.loginController.set('loggingIn', NO);
    if (success) {
      pane = Sproutweets.getPath('mainPage.loginPane');
      pane.remove();
      pane = Sproutweets.getPath('statusPage.statusView');
      Sproutweets.getPath('mainPage.mainPane').appendChild(pane);
      this.invokeLast(function() {
        pane.adjust('top', 0);
      });
      Sproutweets.makeFirstResponder(Sproutweets.TIMELINE_LOADING);
    } else {
      Sproutweets.loginController.set('errorMessage', Sproutweets.loginController.BAD_CREDENTIALS_ERROR.loc());
    }
  }
}) ;
