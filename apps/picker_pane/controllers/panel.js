// ==========================================================================
// SampleControls.PanelController
// ==========================================================================

require('core');
require('views/content_data');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
PickerPane.panelController = SC.Object.create(
/** @scope SampleControls.panelController */ {
  pane: null,

  showPickerPanePointer: function(view) {
    this.pane = SC.PickerPane.create({
    contentView:PickerPane.ContentDataView.extend({
      layout:{width:300,height:340}
      })
    });
    this.pane.popup(view, SC.PICKER_POINTER);
  },

  hidePanel: function() {
    this.pane.remove();
  }

}) ;
