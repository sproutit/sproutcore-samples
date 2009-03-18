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
/** @scope SampleControls.filesController */ {
  
  init: function() {
    sc_super();
    
    var array = SC.SparseArray.create(2000) ;
    array.delegate = this ;
    this.set('content', array) ;
  },
  
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
    var rowHeight = ((idx % 4) * 20) ;
    if (rowHeight == 0 ) rowHeight = 25 ;
    // console.log(idx + ': ' + ((idx % 32) + 20));
    
    array.provideContentAtIndex(idx, SC.Object.create({ 
      title: "Example File %@".fmt(idx), 
      icon: 'sc-icon-document-16',
      unread: idx,
      group: 'Group ' + Math.floor(idx / 50),
      rowHeight: rowHeight
    }));
  }
  
});
