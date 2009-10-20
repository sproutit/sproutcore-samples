// ==========================================================================
// Project:   BigList.sourceController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals BigList */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
BigList.sourceController = SC.Object.create(
/** @scope BigList.sourceController.prototype */ {

  messageCount: 0,
  
  sourceName: 'SparseArray',
  
  sourceObject: function() {
    return this.get('make%@'.fmt(this.get('sourceName')));
  }.property('sourceName', 'makeArray', 'makeSparseArray').cacheable(),
  
  sourceArray: function() {
    var object = this.get('sourceObject');
    return object ? object.get('array') : null;
  }.property('sourceObject').cacheable(),

  // whenever message count changes, schedule a timer to file in 100msec to
  // update the actual list.  This will keep the UI responsive...
  messageCountDidChange: function() {
    if (this._timer) this._timer.invalidate();
    if (this.get('messageCount') < 100) this._messageCountDidChange();
    else this._timer = this.invokeLater(this._messageCountDidChange, 100);
    
  }.observes('messageCount'),
  
  _messageCountDidChange: function() {
    this._timer = null;
    var cnt = this.get('messageCount');
    'makeArray makeSparseArray'.w().forEach(function(key) {
      this.get(key).setIfChanged('lengthConfig', cnt);
    }, this);
  },
  
  // ..........................................................
  // FACTORIES
  // 

  // factory generates the array.  since it is cacheable, with no dependencies
  // it will only be called once.
  makeArray: function() {
    return BigList.MessageArray.create();
  }.property().cacheable(),
  
  makeSparseArray: function() {
    return BigList.MessageSparseArray.create();
  }.property().cacheable()

}) ;
