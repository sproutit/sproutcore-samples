// ==========================================================================
// Twitter.Status
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author    AuthorName
  @version 0.1
*/
Twitter.Status = SC.Record.extend(
/** @scope Twitter.Status.prototype */ {

  userType: 'Twitter.User',
  createdAtType: SC.Record.Date

}) ;
