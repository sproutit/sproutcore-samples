// ==========================================================================
// Project:   Twitter.TweetsDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  Fetches individual tweets

  @extends SC.DataSource
*/
Twitter.TweetsDataSource = SC.DataSource.extend(
/** @scope Twitter.TweetsDataSource.prototype */ {

  // ..........................................................
  // QUERY SUPPORT
  //

  fetch: function(store, query) {
    var auth;
    // TODO: Add handlers to fetch data for specific queries.
    // call store.dataSourceDidFetchQuery(query) when done.
    if (query.get('recordType') === Twitter.Tweet) {
      auth = Twitter.get('authData');

      SC.Request.getUrl('/statuses/home_timeline.json?count=50').json()
                .notify(this, 'didFetchTweets', store, query)
                .header('Authorization', auth)
                .send();
      return YES;
    }
    return NO ; // return YES if you handled the query
  },

  didFetchTweets: function(response, store, query) {
    var data, idx, len, user, users = [];

    if (SC.ok(response)) {
      data = response.get('body');
      len = data.get('length');

      for (idx=0; idx<len; idx++) {
        user = data[idx]['user'];
        data[idx].user = user.id;

        if (!store.storeKeyExists(Twitter.User, user.id)) {
          users.push(user);
        }
      }
      store.loadRecords(Twitter.User, users);
      store.loadRecords(Twitter.Tweet, data);
      store.dataSourceDidFetchQuery(query);
    } else {
      store.dataSourceDidErrorQuery(query, response);
    }
  },

  // ..........................................................
  // RECORD SUPPORT
  //

  retrieveRecord: function(store, storeKey) {

    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  createRecord: function(store, storeKey) {

    // TODO: Add handlers to submit new records to the data source.
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  updateRecord: function(store, storeKey) {

    // TODO: Add handlers to submit modified record to the data source
    // call store.dataSourceDidComplete(storeKey) when done.

    return NO ; // return YES if you handled the storeKey
  },

  destroyRecord: function(store, storeKey) {

    // TODO: Add handlers to destroy records on the data source.
    // call store.dataSourceDidDestroy(storeKey) when done

    return NO ; // return YES if you handled the storeKey
  }

}) ;
