// ==========================================================================
// Contacts.DetailController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName  
  @version 0.1
  @static
*/
Contacts.detailController = SC.ObjectController.create(
/** @scope Contacts.detailController */ {
  
  commitChangesImmediately: false,
  
  // TODO: Add your own code here.
  contentBinding: 'Contacts.masterController.selection'
  
}) ;
