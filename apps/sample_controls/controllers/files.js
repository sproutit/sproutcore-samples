// ==========================================================================
// SampleControls.filesController
// ==========================================================================
/*global SampleControls */

require('core');

/**
  @class
  
  This controller provides an array of generated content for the list view in
  the collections tab.
  
  @extends SC.Object
  @static
*/
SampleControls.filesController = SC.ArrayController.create(
  SC.CollectionRowDelegate,
/** @scope SampleControls.filesController */ {
  
  init: function() {
    sc_super();
    
    var array = SC.SparseArray.array(200000) ;
    array.delegate = this ;
    this.set('content', array) ;
  },
  
  // ..........................................................
  // CUSTOM ROW HEIGHTS
  // 
  
  rowHeight: 20,
  
  customRowHeight: 20,
  
  useCustomRowHeightIndexes: YES,
  
  customRowHeightIndexes: function() {
    if (!this.get('useCustomRowHeightIndexes')) return null;
    var ret = SC.IndexSet.create(), idx, len = this.get('length');
    for(idx=0;idx<len;idx+=100) ret.add(idx);
    return ret.freeze();
  }.property('useCustomRowHeightIndexes').cacheable(),
  
  contentIndexRowHeight: function(view, content, index) {
    var set = this.get('customRowHeightIndexes');
    return (set && set.contains(index)) ? this.get('customRowHeight') : this.get('rowHeight'); 
  },
  
  // grouping
  
  groupByKey: 'group',
  
  exampleGroup: SC.Object.extend({
    
    title: function() { return this.get('value'); }.property(),
    
    // variable group height support
    groupHeight: function() {
      switch (this.get('value')) {
        case 'first':
          return 50 ;
        case 'second':
          return 100 ;
        default:
          return 32 ;
      }
    }.property()
  }),
  
  /** 
    Invoked by the sparse array whenever it needs a particular index 
    provided.  Provide the content for the index.
  */
  sparseArrayDidRequestIndex: function(array, idx) {
    array.provideObjectAtIndex(idx, SC.Object.create({ 
      title: "Example File %@".fmt(idx), 
      icon: 'sc-icon-document-16',
      unread: idx,
      group: 'Group ' + Math.floor(idx / 50)
    }));
  }
  
});
