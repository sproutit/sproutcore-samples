// ==========================================================================
// Project:   DragList.Employee
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals DragList */

/** @class

  A basic employee class.  Used to display employees in the UI.

  @extends SC.Record
  @version 0.1
*/
DragList.Employee = SC.Record.extend(
/** @scope DragList.Employee.prototype */ {

  firstName: SC.Record.attr(String),
  lastName:  SC.Record.attr(String),
  
  fullName: function() {
    return this.getEach('firstName', 'lastName').compact().join(' ');
  }.property('firstName', 'lastName').cacheable(),
  
  icon: 'sc-icon-user-16'
  
}) ;
