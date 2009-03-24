// ==========================================================================
// SampleControls.PanelController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
SampleControls.panelController = SC.Object.create(
/** @scope SampleControls.panelController */ {
	pane: null,

  showPanel: function() {
	  pane = SC.Panel.create({
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

  showAlertPanelWarn: function() {
	  pane = SC.AlertPanel.warn("AlertPanel.message", 'AlertPanel.description', 'AlertPanel.caption', "OK", "Cancel", 'Other...', this);      
	  pane.append();
  },

  showAlertPanelError: function() {
	  pane = SC.AlertPanel.error("AlertPanel.message", 'AlertPanel.description', 'AlertPanel.caption', "OK", "Cancel", 'Other...', this);      
	  pane.append();
  },

  showAlertPanelInfo: function() {
	  pane = SC.AlertPanel.info("AlertPanel.message", 'AlertPanel.description', 'AlertPanel.caption', "OK", "Cancel", 'Other...', this);      
	  pane.append();
  },

  showAlertPanelPlain: function() {
	  pane = SC.AlertPanel.plain("AlertPanel.message", 'AlertPanel.description', 'AlertPanel.caption', "OK", "Cancel", 'Other...', this);      
	  pane.append();
  },

  showAlertPanelShow: function() {
	  pane = SC.AlertPanel.show("AlertPanel.message", 'AlertPanel.description', 'AlertPanel.caption', "OK", "Cancel", 'Other...', 'sc-icon-tools-24', this);      
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

  hidePanel: function() {
    pane.remove();
  }

}) ;
