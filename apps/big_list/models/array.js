// ==========================================================================
// Project:   BigList.Message
// Copyright: ©2009 Apple Inc.
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
BigList.MessageArray = SC.Object.extend(SC.Enumerable, SC.Array,
/** @scope BigList.MessageArray.prototype */ {

  lengthConfig: 0,
  
  // return object at specified index.  generates config...
  objectAt: function(idx) {
    if (idx>=this.get('lengthConfig')) return undefined;
    var objects = this._objects;
    if (!objects) objects = this._objects = [];
    
    var ret = objects[idx];
    if (!ret) ret = objects[idx] = BigList.Message.create({ id: idx });
    return ret ;
  },
  
  // return length
  length: function() {
    return this.get('lengthConfig');
  }.property('lengthConfig').cacheable(),
  
  // changing lengthConfig is like altering the array
  lengthConfigDidChange: function() {
    this.enumerableContentDidChange();
  }.observes('lengthConfig'),
  
  array: function() {
    return this;
  }.property().cacheable()

}) ;
