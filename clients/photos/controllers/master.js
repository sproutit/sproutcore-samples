// ==========================================================================
// Photos.MasterController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName  
  @version 0.1
  @static
*/
Photos.masterController = SC.ArrayController.create(
/** @scope Photos.masterController */ {

  allowsMultipleSelection: NO,
  allowsEmptySelection: NO,
  
  albumsVisible: YES,
  
  albumsVisibleObserver: function() {
    SC.page.workspace.layout() ; // update layout for splitview.
  }.observes('albumsVisible') 
  
}) ;
