// ==========================================================================
// Project:   Outline.rootController
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Outline */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Outline.rootController = SC.TreeController.create(
/** @scope Outline.rootController.prototype */ {
  
  content: null,
  
  count: 0,
  countBinding: "*arrangedObjects.length",
  
  countLabel: function() {
    return "%@ visible items in list".fmt(this.get('count'));
  }.property('count').cacheable()

}) ;
