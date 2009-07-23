// ==========================================================================
// Project:   DragList.inviteesController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals DragList */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
DragList.inviteesController = SC.ArrayController.create(
/** @scope DragList.inviteesController.prototype */ {

  content: [],  // start empty

  description: function() {
    return "_%@ invited".loc(this.get('length'));
  }.property('length').cacheable()

}) ;
