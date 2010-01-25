// ==========================================================================
// Project:   Twitter
// Copyright: ©2010 Apple, Inc.
// ==========================================================================
/*globals Twitter Base64*/

/** @namespace

  Supplies data sources and models for interacting with
  the Twitter API.
  
  @author Tom Dale
  @extends SC.Object
*/
Twitter = SC.Object.create(
  /** @scope Twitter.prototype */ {

  NAMESPACE: 'Twitter',
  VERSION: '0.1.0',

  username: '',
  password: '',
  
  /**
    Returns whether the user has successfully authenticated or not.
    
    @property
    @readOnly
  */
  loggedIn: NO,
  
  /**
    Used to login to Twitter servers.
    
    The third parameter is a callback once credentials have been checked.
    It will be called with YES if login was successful or NO if the username
    or password were invalid.
    
    @param {String} username
    @param {String} password
    @param {Object} target The target object for the method call. (optional)
    @param {String|Function} action The method called once a response is
    received. (optional)
  */
  login: function(username, password, target, action) {
    var auth;
    
    // Store the passed username/password.
    this.set('username', username);
    this.set('password', password);
    if (this.setIfChanged('loggedIn', NO));
    
    auth = this.get('authData');
    SC.Request.getUrl('account/verify_credentials.json').json()
              .notify(this, 'verifyLogin', target, action)
              .header('Authorization', auth)
              .send();
  },
  
  verifyLogin: function(response, target, action) {
    var user;
    if (SC.ok(response)) {
      this.set('loggedIn', YES);
      
      user = response.get('body');
      this.store.loadRecords(Twitter.User, [user]);
      this.set('user', this.store.find(Twitter.User, user.id));
    }
    
    if (action) {
     if (SC.typeOf(action) === SC.T_STRING) action = target[action];
     if (!action) throw SC.Error.desc('Unable to resolve login callback target');
     action.apply(target, [this.get('loggedIn'), response]); 
    }
  },
  
  /**
    Base64-encodes the username and password.  Used by the data source
    to do Basic HTTP auth.
    
    @property
  */
  authData: function() {
   var username = this.get('username'),
       password = this.get('password');
       
    return "Basic "+Base64.encode(username+":"+password);
  }.property('username', 'password').cacheable(),
  
  _loggedIn: NO
}) ;
