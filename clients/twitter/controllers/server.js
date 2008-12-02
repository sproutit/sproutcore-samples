// ==========================================================================
// Twitter.ServerController
// ==========================================================================

require('core');

Twitter.LOADING = 'loading' ;
Twitter.READY = 'ready' ;
Twitter.NOT_LOADED = 'not_ready' ;

/** @class

  Manages interacting with the server.

  @extends SC.Object
  @static
*/
Twitter.serverController = SC.Object.create(
/** @scope Twitter.serverController */ {

  // ...........................................
  // PROPERTIES
  //

  /** The name of the user that the feed belongs to. */
  username: 'okito',

  /**
    Reflects the current state of the server.  May be:

    NOT_LOADED: Never loaded, not initialize
    LOADING: currently waiting on a feed refresh
    READY: feed loaded and ready
    Error: an error occurred.
  */
  status: Twitter.NOT_LOADED,

  /**
    Generates a human readable status from the status.  Note how this and
    the next computed property are both dependent on the status property.
    Whenever the status property changes, observers of these properties will
    be notified.
  */
  humanReadableStatus: function() {
    var status = this.get('status') ;
    switch(status) {
      case Twitter.READY:
      case Twitter.NOT_LOADED:
        return 'Ready.';
      case Twitter.LOADING:
        return 'Loading...' ;
      default:
        return (SC.$type(status) === SC.T_ERROR) ? status.get('description') : status;
    }
  }.property('status'),

  /**
    This computed property is used to enable/disable the refresh button.
  */
  canRefresh: function() {
    return (this.get('status') !== Twitter.LOADING) ;
  }.property('status'),

  // ...........................................
  // OBSERVERS
  //

  /**
    Called whenever the username changes.  Reloads the feed.
  */
  usernameDidChange: function() {
    this.refresh() ;
  }.observes('username'),

  // ...........................................
  // METHODS
  //

  /** Pulls the timeline from Twitter... */
  refresh: function() {

    // bail if already loading.  Otherwise set state.
    if (this.get('status') === Twitter.LOADING) return ;
    this.set('status', Twitter.LOADING) ;

    // initiate the Ajax request.  Currently uses prototype.
    var username = this.get('username') ;
    //var url = static_url('sample.json');
    var url = '/statuses/user_timeline/%@.json'.fmt(username) ;
    new Ajax.Request(url, {
      method: 'get',
      onSuccess: this.refreshDidSucceed.bind(this),
      onFailure: this.refreshDidFail.bind(this)
    }) ;
  },

  /**
    Called when the request returns successfully.  Process the return
    records and add them to the store.
  */
  refreshDidSucceed: function(transport) {
    var json = transport.responseText ;
    if (json && json.parseJSON) json = json.parseJSON() ;

    // if no valid json was received, set an error...
    if (SC.$type(json) !== SC.T_ARRAY) {
      this.set('status', SC.$error("Feed contains no data.")) ;

    // valid json was received, process it into a format that can be consumed
    // by the SC.Store and then add it.
    } else {
      this.set('status', Twitter.READY) ;

      // convert the received attributes into attribute hashes that can be
      // processed by updateRecords.
      var attrs = this.convertFeedToRecordAttributes(json) ;

      // load into the store.  This should update the collection.
      SC.Store.updateRecords(attrs);
    }
  },

  refreshDidFail: function(transport) {
    // if we failed b/c of a 400, then we probably got an explanation...
    // try to fill that in.
    var reason = "Refresh failed" ;
    if (transport.status === 400) {
      var json = transport.responseText ;
      if (json && json.parseJSON) json = json.parseJSON() ;
      if (json && json.error) reason = json.error ;
    }

    var error = SC.$error(reason, transport.status) ;
    this.set('status', error) ;
  },

  /**
    The array of attributes returned by the twitter feed is almost what we
    want but not quite.  This method will build a new set of attributes from
    the ones returned by twitter.

    It does the following:

    1. converts id => guid
    2. Adds a "type" attributes
    3. Extracts the User and replaces it with the User guid.
    4. Builds an array of User attributes as well...
  */
  convertFeedToRecordAttributes: function(json) {
    var ret = [] ;
    var users = {} ; // user hashes, by guid.

    // loop through json and fix up items.
    json.each(function(rec) {
      rec.guid = rec.id ; // convert to guid.
      rec.recordType = Twitter.Status; // setup the record type

      var user = rec.user ;
      if (user) rec.user = user.id ;

      // save user record if needed...
      if (user && !users[user.id]) {
        user.guid = user.id ;
        user.recordType = Twitter.User; // setup the record type
        users[user.id] = user ;
      }

      // save in return array
      ret.push(rec) ;
    }) ;

    // now save user info.
    for(var key in users) {
      if (!users.hasOwnProperty(key)) continue ;
      ret.push(users[key]) ;
    }

    return ret ;
  }

}) ;
