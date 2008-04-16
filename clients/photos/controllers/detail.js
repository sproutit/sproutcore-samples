// ==========================================================================
// Photos.DetailController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName  
  @version 0.1
  @static
*/
Photos.detailController = SC.ArrayController.create(
/** @scope Photos.detailController */ {
  
    contentBinding: 'Photos.albumController.photos'
  
}) ;
