// ==========================================================================
// Project:   Twitter.listsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Twitter.listsController = SC.ArrayController.create(
/** @scope Twitter.listsController.prototype */ {

  isLoading: NO,

  reload: function() {
    var lists;
    lists = Twitter.store.find('Twitter.List');
    this.set('content', lists);
  },

  commitRecords: function() {
    Twitter.store.commitRecords();
  },

  statusDidChange: function() {
    Twitter.sendAction('listsStatusDidChange');
  }.observes('status'),

  selectionDidChange: function() {
    this.invokeLast( function() {
      Twitter.sendAction('listsSelectionDidChange');
    });
  }.observes('selection')
}) ;
