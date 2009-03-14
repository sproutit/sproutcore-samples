// ==========================================================================
// SampleControls.filesController
// ==========================================================================
/*global SampleControls */

require('core');

/** @class

  This controller provides an array of generated content for the list view in
  the collections tab.
  
  @extends SC.Object
  @static
*/
SampleControls.filesController = SC.ArrayController.create(
/** @scope SampleControls.filesController */ {

  init: function() {
    sc_super();
    
    var array = SC.SparseArray.create(100000) ;
    array.delegate = this ;
    this.set('content', array) ;
  },

  /** 
    Invoked by the sparse array whenever it needs a particular index 
    provided.  Provide the content for the index.
  */
  sparseArrayDidRequestIndex: function(array, idx) {
    array.provideContentAtIndex(idx, SC.Object.create({ 
      title: "Example File %@".fmt(idx), 
      icon: 'sc-icon-document-16',
      unread: idx
    })); 
  }
  
}) ;

