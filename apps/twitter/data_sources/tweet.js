// ==========================================================================
// Project:   Twitter.TweetDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Twitter.TweetDataSource = SC.DataSource.extend(
/** @scope Twitter.TweetDataSource.prototype */ {

  pageSize: 50,
   
  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query) {

    SC.Request.getUrl('search.json?rpp=50&page=1&q='+query.query).json()
      .notify(this, 'didFetchTweets', store, query, {})
      .send();
    return YES;

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
  },
  
  
  didFetchTweets: function(response, store, query, params) {
    var data, storeKeys;
    if (SC.ok(response)) {
      data = response.get('body').results;
      storeKeys = store.loadRecords(Twitter.Tweet, data);
      store.loadQueryResults(query, storeKeys);
    } 
    else store.dataSourceDidErrorQuery(query, response);
  }
  
}) ;
