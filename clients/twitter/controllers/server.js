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
        return ($type(status) === T_ERROR) ? status.get('description') : status;
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
    new Ajax.Request('/statuses/user_timeline/%@.json'.fmt(username), {
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
    if ($type(json) !== T_ARRAY) {
      this.set('status', $error("Feed contains no data.")) ;
      
    // valid json was received, process it into a format that can be consumed
    // by the SC.Store and then add it.
    } else {
      this.set('status', Twitter.READY) ;
      console.log("JSON = %@".fmt(json.map(function(x) { return $I(x); }))) ;
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
    
    var error = $error(reason, transport.status) ;
    this.set('status', error) ;
  }
  
}) ;
