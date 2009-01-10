// ==========================================================================
// Drag.RedBoxView
// ==========================================================================

require('core');

/** @class

  A draggable view.

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
Drag.RedBoxView = SC.View.extend(
/** @scope Drag.RedBoxView.prototype */ {
  
  styleClass: 'red',

  // begin a drag session when the mouse is pressed down on a red view
  mouseDown: function(evt) {
    // initiate the drag
    SC.Drag.start({
      event: evt,
      source: this,
      dragView: this,
      ghost: YES,
      slideBack: YES,
      dataSource: this
    }) ;
    
    return YES ;
  }
  
}) ;
