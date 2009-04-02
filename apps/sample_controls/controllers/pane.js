// ==========================================================================
// SampleControls.PaneController
// ==========================================================================

sc_require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
SampleControls.paneController = SC.Object.create(
/** @scope SampleControls.paneController */ {
  pane: null,

  showPanelPane: function() {
    pane = SC.PanelPane.create({
      contentView: SC.View.extend({
        layout: { width: 400, height: 200, centerX: 0, centerY: 0 }
      })
    });
    pane.append();
  },

  showSheetPane: function() {
    pane = SC.SheetPane.create({
      contentView: SC.View.extend({
        layout: { width: 400, height: 200, centerX: 0 }
      })
    });
    pane.append();
  },

  showAlertPaneWarn: function() {
    pane = SC.AlertPane.warn("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneError: function() {
    pane = SC.AlertPane.error("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneInfo: function() {
    pane = SC.AlertPane.info("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPanePlain: function() {
    pane = SC.AlertPane.plain("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneShow: function() {
    pane = SC.AlertPane.show("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', 'sc-icon-tools-24', this);      
    pane.append();
  },

  showPalettePane: function() {
    pane = SC.PalettePane.create({
      layout: { width: 400, height: 200, right: 20, top: 0 },
      contentView: SC.View.extend({
        layout: { width: 400, height: 200, right: 0, top: 0 }
      })
    });
    pane.append();
  },

  showPickerPaneDefault: function(view) {
    pane = SC.PickerPane.create({
      contentView: SC.View.extend({
        layout: { width: 300, height: 200 }
      })
    });
    pane.popup(view);
  },

  showPickerPaneMenu: function(view) {
    pane = SC.PickerPane.create({
      contentView: SC.View.extend({
        layout: { width: 300, height: 200 }
      })
    });
    pane.popup(view, SC.PICKER_MENU);
  },

  showPickerPaneFixed: function(view) {
    pane = SC.PickerPane.create({
      contentView: SC.View.extend({
        layout: { width: 300, height: 200 }
      })
    });
    pane.popup(view, SC.PICKER_FIXED);
  },

  showPickerPanePointer: function(view) {
    pane = SC.PickerPane.create({
      contentView: SC.View.extend({
        layout: { width: 300, height: 200 }
      })
    });
    pane.popup(view, SC.PICKER_POINTER, [3,0,1,2,2]);
  },

  hidePane: function() {
    pane.remove();
  }

}) ;
