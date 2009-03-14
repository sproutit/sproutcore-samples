// ==========================================================================
// Contacts.ListItemView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.ClassicView
  @author    AuthorName
  @version 0.1
*/
Contacts.ListItemView = SC.ClassicView.extend(
/** @scope Contacts.ListItemView.prototype */ {

  emptyElement: '<div class="list-item"></div>',

  /** The record we want to display. */
  content: null,

  /** Selection state. */
  isSelected: false,

  _contentDidChange: function() {
    var content = this.get('content') ;
    var value = (content) ? content.get('fullName') : '(No Value)';
    this.set('asHTML', value) ;
  }.observes('*content.fullName'),

  _isSelectedObserver: function() {
    this.setClassName('sel', this.get('isSelected')) ;
  }.observes('isSelected')

}) ;
