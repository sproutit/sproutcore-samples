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
  
    // countLabel: function() {
    //   var len = this.get('length') ;
    //   return (len <= 0) ? "No Photos".loc() : (len > 1) ? "%@ Photos".fmt(len) : "%@ Photo".fmt(len);
    // }.property('length'),

    countLabel: function() {
      
      // photo count label
      var len = this.get('length') ;
      var label = (len <= 0) ? "No Photos".loc() : (len > 1) ? "%@ Photos".fmt(len) : "%@ Photo".fmt(len);
      
      // selection label
      var sel = this.get('selection') ;
      var len = (sel) ? sel.get('length') : 0 ;
      var selLabel = (len > 0) ? "(%@ selected)".fmt(len) : null ;
      
      return [label, selLabel].compact().join(' ');
    }.property('length', 'selection'),
    
    contentBinding: 'Photos.albumController.photos'
  
}) ;
