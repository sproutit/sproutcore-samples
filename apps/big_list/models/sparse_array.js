// ==========================================================================
// Project:   BigList.Message
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals BigList */

/** @class

  This Array-like object will generate message objects on demand.  Can be 
  used to display the total message count.  The lengthConfig property 
  is used to configure the generated length.  The array property returns the
  actual array we want to bind to.  This is used to present a generalized API
  between this guy on the SparseArray handler.

  @extends SC.Object
  @version 0.1
*/
BigList.MessageSparseArray = SC.Object.extend(
/** @scope BigList.MessageSparseArray.prototype */ {

  lengthConfig: 0,

  array: function() {
    return SC.SparseArray.create({ 
      delegate: this,
      rangeWindowSize: 50
   });
  }.property().cacheable(),


  _lengthConfigDidChange: function() {
    this.get('array').reset();
  }.observes('lengthConfig'),
  
  // ..........................................................
  // YOU CAN TRY THIS ASYNC OR NOT...
  // 
  // do everything async

  async: YES,

  latency: 500, // simulate latency...
  
  _do: function(func) {
    if (this.get('async')) this.invokeLater(func, this.get('latency')); 
    else func.call(this);
  },
  
  // ..........................................................
  // SC.SparseArray API 
  // 
  
  sparseArrayDidRequestLength: function(sa) {
    console.log('sparseArrayDidRequestLength');
    this._do(function() { 
      console.log('providinglength %@'.fmt(this.get('lengthConfig')));
      sa.provideLength(this.get('lengthConfig'));
    });
  },
  
  sparseArrayDidRequestRange: function(sa, range) {
    console.log('sparseArrayDidRequestRange(%@)'.fmt(SC.inspect(range)));

    range = SC.copy(range); // make sure this doesn't change
    this._do(function() {
      
      var objects = this._objects;
      if (!objects) objects = this._objects = [];

      var ret = [], 
          idx = 0,
          start = range.start,
          len   = range.length,
          max   = this.get('lengthConfig'),
          K     = BigList.Message,
          obj;
          
      for(idx=0;idx<len;idx++) {
        if ((idx+start)>=max) ret[max] = undefined;
        else {
          obj = objects[idx+start];
          if (!obj) obj = objects[idx+start] = K.create({ id: idx+start });
          ret[idx] = obj;
        }
      }
      
      sa.provideObjectsInRange(range, ret);
      sa.rangeRequestCompleted(range.start);
    });
  }

}) ;
