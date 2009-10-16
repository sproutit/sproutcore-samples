// ==========================================================================
// Project:   BigList.Message
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals BigList */

/** @class

  This model object is generated on demand to represent a particular email
  for the message list.

  @extends SC.Object
  @version 0.1
*/
BigList.Message = SC.Object.extend(
/** @scope BigList.Message.prototype */ {

  id: 0,
  
  subject: function() {
    return "Big List Message #%@".fmt(this.get('id'));
  }.property('id').cacheable()

}) ;
