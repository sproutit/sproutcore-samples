// ==========================================================================
// Project:   Twitter.TweetDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter Base64*/

/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Twitter.TweetDataSource = SC.DataSource.extend(
/** @scope Twitter.TweetDataSource.prototype */ {

  pageSize: 50,
  
  recentQuery: null,
  
  storeKeyArraySparse: null,

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query, params) {
    var recordType = query.get('recordType');

    // We need to query different APIs depending on the
    // type of the record
    if (recordType === Twitter.Tweet) {
      return this.fetchTweets(store, query, params);
    } else if (recordType === Twitter.List){
      return this.fetchLists(store, query, params);
    }
    
    // We weren't able to handle this request because
    // it was a record type we don't know about.
    return NO;
  },
  
  fetchTweets: function(store, query, params) {
    var range;
    this.set('recentQuery', query);
    if(this.storeKeyArraySparse===null){
      this.storeKeyArraySparse = SC.SparseArray.array();
      this.storeKeyArraySparse.set('rangeWindowSize', this.pageSize);
      this.storeKeyArraySparse.delegate = this;
    }
    if(!params) {
      range={start:0, length:this.pageSize};
    }else {
      range=params.range;
    }
    
    if(query.userID){
      SC.Request.getUrl('search.json?rpp='+this.pageSize+'&page='+((range.start/range.length)+1)+'&q=from:'+query.userID).json()
        .notify(this, 'didFetchTweets', store, query, {range: range})
        .send();      
    }else{
      SC.Request.getUrl('search.json?rpp='+this.pageSize+'&page='+((range.start/range.length)+1)+'&q='+query.query).json()
        .notify(this, 'didFetchTweets', store, query, {range: range})
        .send();
    }
    return YES;
  },
  
  fetchLists: function(store, query, params) {
    var url = '1/%@/lists.json',
        username = query.get('username'),
        auth = Twitter.loginController.get('authData');

        
    var req = SC.Request.getUrl(url.fmt(username)).json()
                        .notify(this, 'didFetchLists', store, query)
                        .header('Authorization', auth)
                        .send();
    
    return YES;
  },

  // ..........................................................
  // RECORD SUPPORT
  // 
  
  retrieveRecord: function(store, storeKey, id) {
  
    if (store.recordTypeFor(storeKey) === Twitter.ListMembership) {
      console.log("Getting membership for "+id);
      return this.retrieveList(store, storeKey, id);
    }
    // TODO: Add handlers to retrieve an individual record's contents
    // call store.dataSourceDidComplete(storeKey) when done.
    
    return NO ; // return YES if you handled the storeKey
  },
  
  retrieveList: function(store, storeKey, id) {
    var url = '1/%@/%@/members.json',
        username = Twitter.loginController.get('username');
    
    url = url.fmt(username, id);
    var auth = Twitter.loginController.get('authData');
    
    SC.Request.getUrl(url).json()
              .notify(this, 'didRetrieveList', store, storeKey)
              .header('Authorization', auth)
              .send();
              
    return YES;
  },
  
  didRetrieveList: function(response, store, storeKey) {
    var idx, len, id;
    
    if (SC.ok(response)) {
      var users = response.get('body').users;
      len = users.length;
      for (idx = 0; idx < len; idx++) {
        id = Twitter.User.storeKeyFor(users[idx].id);
        store.pushRetrieve(Twitter.User, id, users[idx], id);
        users[idx] = users[idx].id;
      }
      store.dataSourceDidComplete(storeKey, response.get('body'));
    } else {
      store.dataSourceDidError(storeKey);
    }
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
    var data, storeKeys, currentStart;
    if (SC.ok(response)) {
      data = response.get('body').results;
      currentStart = (response.get('body').page-1) * response.get('body').results_per_page;
      storeKeys = store.loadRecords(Twitter.Tweet, data);
      if(data.length<this.pageSize) this.storeKeyArraySparse.provideLength(currentStart+this.pageSize);
      this.storeKeyArraySparse.provideLength(currentStart+this.pageSize+10);
      this.storeKeyArraySparse.provideObjectsInRange(params.range, storeKeys) ;
      this.storeKeyArraySparse.rangeRequestCompleted(currentStart) ;
      store.loadQueryResults(query, this.storeKeyArraySparse);
    } 
    else store.dataSourceDidErrorQuery(query, response);
  },
  
  didFetchLists: function(response, store, query, params) {
    if (SC.ok(response)) {
      var data = response.get('body').lists;
      data.forEach(function(list) {
        list.membership = list.id;
      });
      store.loadRecords(Twitter.List, data);
    } else {
      store.dataSourceDidErrorQuery(query);
    }
  },
  
  sparseArrayDidRequestLength: function(sparseArray) {
     console.log('MessageListDataSource.sparseArrayDidRequestLength') ;
     throw new Error('XXX') ;
   },

   sparseArrayDidRequestIndex: function(sparseArray, index) {
     console.log('MessageListDataSource.sparseArrayDidRequestIndex') ;
   },

   sparseArrayDidRequestRange: function(sparseArray, range) {
     console.log('didrequestrange');
     this.fetch(Twitter.store,
                this.get('recentQuery'),
                {
                range: {start:range.start, length:this.pageSize}
                }) ;
   },
   
   sparseArrayShouldReplace: function(sparseArray, idx, amt, objects) {
     console.log('MessageListDataSource.sparseArrayShouldReplace') ;
     return YES ;
   },

   sparseArrayDidReset: function(sparseArray) {
     console.log('MessageListDataSource.sparseArrayDidReset') ;
   }


}) ;
