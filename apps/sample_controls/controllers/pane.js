// ==========================================================================
// SampleControls.PaneController
// ==========================================================================
/*globals SampleControls */

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
    var pane = SC.PanelPane.create({
      layout: { width: 400, height: 200, centerX: 0, centerY: 0 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'labelView buttonView'.w(),

        labelView: SC.LabelView.extend({
          layout: { centerY: -10, height: 24, left: 0, right: 0 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: "SC.PanelPane"
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 21, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "SampleControls.paneController.pane"
        })
      })
    });
    pane.append();
    this.set('pane', pane);
  },

  showSheetPane: function() {
    var pane = SC.SheetPane.create({
      layout: { width: 400, height: 200, centerX: 0 },
      contentView: SC.View.extend({
      })
    });
    pane.append();
  },

  showAlertPaneWarn: function() {
    var pane = SC.AlertPane.warn("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneError: function() {
    var pane = SC.AlertPane.error("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneInfo: function() {
    var pane = SC.AlertPane.info("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPanePlain: function() {
    var pane = SC.AlertPane.plain("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneShow: function() {
    var pane = SC.AlertPane.show("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', 'sc-icon-tools-24', this);      
    pane.append();
  },

  showPalettePane: function() {
    var pane = SC.PalettePane.create({
      layout: { width: 400, height: 200, right: 20, top: 0 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'labelView buttonView'.w(),

        labelView: SC.LabelView.extend({
          layout: { centerY: -10, height: 24, left: 0, right: 0 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: "SC.PalettePane"
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 21, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "SampleControls.paneController.palettePane"
        })
      })
    });
    pane.append();
    this.set('palettePane', pane);
  },

  showPickerPaneDefault: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view);
  },

  showPickerPaneMenu: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view, SC.PICKER_MENU);
  },

  showPickerPaneFixed: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view, SC.PICKER_FIXED);
  },

  showPickerPanePointer: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view, SC.PICKER_POINTER, [3,0,1,2,2]);
  },

  hidePane: function() {
    this.pane.remove();
  }

}) ;
