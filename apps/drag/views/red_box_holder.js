// ==========================================================================
// Drag.RedBoxHolderView
// ==========================================================================

require('core');

/** @class

  A drag target in which red box views can be dropped.

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
Drag.RedBoxHolderView = SC.View.extend( SC.DropTarget,
/** @scope Drag.RedBoxHolderView.prototype */ {

  classNames: 'red-holder',
  
  dragStarted: function(drag, evt) {
    // console.log('dragStarted called on %@'.fmt(this)) ;
    this.$().addClass('drop-target') ;
  },

  computeDragOperations: function(drag, evt) {
    return SC.DRAG_ANY ;
  },
  
  performDragOperation: function(drag, op) {
    this.appendChild(drag.get('source')) ;
    return op ;
  },
  
  dragEntered: function(drag, evt) {
    console.log('dragEntered called on %@'.fmt(this)) ;
  },
  
  dragUpdated: function(drag, evt) {
    // console.log('dragUpdated called on %@'.fmt(this)) ;
  },
  
  dragExited: function(drag, evt) {
    console.log('dragExited called on %@'.fmt(this)) ;
  },
  
  dragEnded: function(drag, evt) {
    // console.log('dragEnded called on %@'.fmt(this)) ;
    this.$().removeClass('drop-target') ;
  }

}) ;
