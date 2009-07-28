// ==========================================================================
// Project:   DragList.employeesController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals DragList */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
DragList.employeesController = SC.ArrayController.create(
/** @scope DragList.employeesController.prototype */ {

  description: function() {
    return "_%@ remaining employees".loc(this.get('length'));
  }.property('length').cacheable()

}) ;
