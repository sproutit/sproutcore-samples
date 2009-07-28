// ==========================================================================
// Project:   DragList.dragController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals DragList */

/** @class

  This is the delegate the coordinates inter-column drag and drop operations.

  @extends SC.Object
*/
DragList.dragController = SC.Object.create(SC.CollectionViewDelegate,
/** @scope DragList.dragController.prototype */ {

  // ..........................................................
  // DRAG SOURCE SUPPORT
  // 
  
  /**
    When dragging, add an Employee data type to the drag.
  */
  collectionViewDragDataTypes: function(view) {
    return [DragList.Employee];
  },
  
  /**
    If the requested dataType if employees, provide the currently selected
    employees.  Otherwise return null.
  */
  collectionViewDragDataForType: function(view, drag, dataType) {
    var ret=null, sel;
    
    if (dataType === DragList.Employee) {
      sel = view.get('selection');
      ret = [];
      if (sel) sel.forEach(function(x) { ret.push(x); }, this);
    }
    
    return ret ;
  },

  // ..........................................................
  // DROP TARGET SUPPORT
  // 

  /**
    If the drag data includes employees, then we can accept a move or copy
    from most locations.  If the dragSource is another collection view sharing
    the same delegate, then we know how to do a move, so allow that.  
    Otherwise, just allow a copy.
  */
  collectionViewComputeDragOperations: function(view, drag, proposedDragOperations) {
    if (drag.hasDataType(DragList.Employee)) {
      var source = drag.get('source');
      if (source && source.delegate === this) return SC.DRAG_MOVE;
      else return SC.DRAG_COPY;

    } else return SC.DRAG_NONE;
  },
  
  /**
    Called if the user actually drops on the view.  Just get the data from
    the drag and insert before or after the insertion index.  If op is 
    SC.DRAG_MOVE, then also remove the same objects from the other content
    and clear its selection.
  */
  collectionViewPerformDragOperation: function(view, drag, dragOp, idx, dropOp) {

    if (dragOp & SC.DRAG_REORDER) return SC.DRAG_NONE; // allow reorder
    
    var employees = drag.dataForType(DragList.Employee),
        content   = view.get('content'),
        len       = view.get('length'),
        source    = drag.get('source'),
        ret       = SC.DRAG_NONE;
    
    // only if data is available from drag
    if (!employees) return ret;
    
    // adjust the index to the location to insert and then add it
    if (dropOp & SC.DROP_AFTER) idx--;
    if (idx>len) idx = len;
    content.replace(idx, 0, employees);
    
    // if we can move, then remove employees from the old one
    if (!(dragOp & SC.DRAG_MOVE)) ret = SC.DRAG_COPY;
    else if (content = source.get('content')) {
      content.removeObjects(employees);
      ret = SC.DRAG_MOVE;
    }       
    
    // finally, select the new employees
    view.select(SC.IndexSet.create(idx, employees.get('length')));
    view.becomeFirstResponder();
    
    return ret;
  }
}) ;
