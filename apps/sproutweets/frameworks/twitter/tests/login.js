/*globals Twitter*/
var callbackObject; 

module("Twitter login", {
  setup: function() {
    Twitter._loggedIn = NO;
    Twitter.notifyPropertyChange('loggedIn');
    callbackObject = SC.Object.create({
      loggedInDidChange: CoreTest.stub('loggedInDidChange'),
      
      loginResponseReceived: CoreTest.stub('loginResponseReceived',
      function(response) {
        this.response = response;
      })
    });
  }
});

test("loggedIn should change if login() is called while logged in", function() {
  Twitter.addObserver('loggedIn', callbackObject, 'loggedInDidChange');
  Twitter.login('----', '----');
  callbackObject.loggedInDidChange.expect(0);
  Twitter._loggedIn = YES;
  Twitter.login('----', '----');
  callbackObject.loggedInDidChange.expect(1);
});

test('verifyLogin: login successful', function() {
  Twitter.verifyLogin({ }, callbackObject, 'loginResponseReceived');
  ok(callbackObject.response, 'callback called with YES');
  equals(Twitter.get('loggedIn'), YES, 'logged in');
});

test('verifyLogin: login unsuccessful', function() {
  equals(Twitter.get('loggedIn'), NO, 'precond - not logged in');
  Twitter.verifyLogin(SC.Error.create(), callbackObject, 'loginResponseReceived');
  equals(callbackObject.response, NO, 'callback called with NO');
  equals(Twitter.get('loggedIn'), NO, 'not logged in');
  
});