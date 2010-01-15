// ==========================================================================
// Project:   Twitter.TwettDataSource
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Twitter */


sc_require('models/twett');


/** @class

  (Document Your Data Source Here)

  @extends SC.DataSource
*/
Twitter.TwettDataSource = SC.DataSource.extend(
/** @scope Twitter.TwettDataSource.prototype */ {
  
  storeKeyArraySparse: null,
  
  pageSize: 50,
  
  recentQuery: null,

  // ..........................................................
  // QUERY SUPPORT
  // 

  fetch: function(store, query, params) {
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
    SC.Request.getUrl('search.json?rpp='+this.pageSize+'&page='+((range.start/range.length)+1)+'&q='+query.query).json()
      .notify(this, 'didFetchTwetts', store, query, {range: range})
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
  
  
  didFetchTwetts: function(response, store, query, params) {
    var data, currentStart, storeKeys;
    if (SC.ok(response)) {
      data = response.get('body').results;
      currentStart = (response.get('body').page-1) * response.get('body').results_per_page;
      storeKeys=store.loadRecords(Twitter.Twett, data);
      if(data.length<this.pageSize) this.storeKeyArraySparse.provideLength(currentStart+this.pageSize);
      this.storeKeyArraySparse.provideLength(currentStart+this.pageSize+10);
      this.storeKeyArraySparse.provideObjectsInRange(params.range, storeKeys) ;
      this.storeKeyArraySparse.rangeRequestCompleted(currentStart) ;
      store.loadQueryResults(query, this.storeKeyArraySparse);
    } else store.dataSourceDidErrorQuery(query, response);
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
